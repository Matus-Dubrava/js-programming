FROM node:14-stretch-slim

ENV TINI_VERSION v0.19.0
ENV CI true
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini

WORKDIR /node/app

COPY ./package*.json ./

RUN npm install && npm cache clear --force

COPY . .

ENTRYPOINT ["/tini", "--"]

CMD ["npm", "start"]