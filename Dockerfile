FROM node:22-alpine

WORKDIR /workspace
COPY ./package*.json /workspace

RUN apk update && \
    npm install && \
    npm install -g @aws-amplify/cli
