# Monitorroom

https://monitorroom.jacoyutorius.net/

![https://d3avprx962x2m0.cloudfront.net/public/Livecameras.png](https://d3avprx962x2m0.cloudfront.net/public/Livecameras.png)


## start

```
npm install
npm run dev
```

## scripts

```
npm run dev
npm run build
npm run preview
npm run test
npm run refresh:cameras
```

## live cameras

`src/liveCameras.json` にライブカメラ一覧を持ってる。
YouTube の配信IDは変わることがあるから、`npm run refresh:cameras` で `channelUrl/live` から最新の `videoId` を引き直せる。
