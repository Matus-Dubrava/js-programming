FROM node:14-stretch-slim

ENV TINI_VERSION v0.19.0
ENV CI true

WORKDIR /node/app

COPY ./package*.json ./

RUN npm install && npm cache clear --force

COPY . .

CMD ["npm", "start"]