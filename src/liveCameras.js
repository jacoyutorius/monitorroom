import liveCameraData from './liveCameras.json';

export const liveCameras = liveCameraData;

export function getEmbedUrl(videoId) {
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&loop=1&controls=0&playlist=${videoId}`;
}

export function getCameraIdentity(camera) {
  return camera.channelUrl ?? camera.videoId;
}

export function getCurrentVideoId(camera) {
  return camera.videoId;
}
