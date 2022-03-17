FROM node:16-alpine

WORKDIR /workspace
COPY ./package*.json /workspace

RUN apk update && \
    npm install && \
    npm install -g npm \
    npm install -g @aws-amplify/cli