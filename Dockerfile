FROM node:16-alpine

WORKDIR /workspace
COPY ./package*.json /workspace

# npmコマンドでVue.jsをインストール
RUN apk update && \
    npm install && \
    npm install -g npm