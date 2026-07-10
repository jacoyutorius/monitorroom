import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.resolve(__dirname, '../src/liveCameras.json');
const canonicalPattern =
  /<link rel="canonical" href="https:\/\/www\.youtube\.com\/watch\?v=([\w-]{11})"/;
const ogUrlPattern =
  /<meta property="og:url" content="https:\/\/www\.youtube\.com\/watch\?v=([\w-]{11})"/;

function getTodayString() {
  return new Date().toISOString().slice(0, 10);
}

function extractWatchVideoIdFromUrl(url) {
  try {
    const parsed = new URL(url);

    if (
      parsed.hostname.includes('youtube.com') &&
      parsed.pathname === '/watch'
    ) {
      return parsed.searchParams.get('v');
    }

    if (parsed.hostname === 'youtu.be') {
      return parsed.pathname.slice(1) || null;
    }

    return null;
  } catch {
    return null;
  }
}

function extractWatchVideoIdFromHtml(text) {
  return (
    text.match(canonicalPattern)?.[1] ??
    text.match(ogUrlPattern)?.[1] ??
    null
  );
}

async function resolveLiveVideo(camera) {
  const liveUrl = `${camera.channelUrl.replace(/\/$/, '')}/live`;
  const response = await fetch(liveUrl, {
    redirect: 'follow',
    headers: {
      'user-agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
      accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
      'accept-language': 'ja,en-US;q=0.9,en;q=0.8',
    },
  });

  const body = await response.text();
  const resolvedVideoId =
    extractWatchVideoIdFromUrl(response.url) ??
    extractWatchVideoIdFromHtml(body);

  return {
    ok: response.ok && Boolean(resolvedVideoId),
    status: response.status,
    liveUrl,
    resolvedUrl: response.url,
    resolvedVideoId,
  };
}

async function main() {
  const source = await readFile(dataPath, 'utf8');
  const cameras = JSON.parse(source);
  const nextVerifiedAt = getTodayString();
  const updated = [];
  let changedCount = 0;

  for (const camera of cameras) {
    try {
      const result = await resolveLiveVideo(camera);

      if (!result.ok) {
        console.warn(
          `[skip] ${camera.title}: status=${result.status} resolvedUrl=${result.resolvedUrl}`
        );
        updated.push(camera);
        continue;
      }

      const nextCamera = {
        ...camera,
        videoId: result.resolvedVideoId,
        lastVerifiedAt: nextVerifiedAt,
      };

      if (nextCamera.videoId !== camera.videoId) {
        changedCount += 1;
        console.log(
          `[update] ${camera.title}: ${camera.videoId} -> ${nextCamera.videoId}`
        );
      } else {
        console.log(`[keep] ${camera.title}: ${camera.videoId}`);
      }

      updated.push(nextCamera);
    } catch (error) {
      console.warn(
        `[error] ${camera.title}: ${error instanceof Error ? error.message : String(error)}`
      );
      updated.push(camera);
    }
  }

  await writeFile(dataPath, `${JSON.stringify(updated, null, 2)}\n`);
  console.log(
    `done: ${updated.length} cameras checked, ${changedCount} video ids updated`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
