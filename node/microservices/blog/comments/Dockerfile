FROM node:14-stretch-slim

ENV TINI_VERSION v0.19.0
ENV EVENT_BUS_URL http://event-bus-srv:4005
ENV PORT 4001

ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini

WORKDIR /node/app

COPY ./package*.json ./

RUN npm install && npm cache clear --force

COPY . .

ENTRYPOINT ["/tini", "--"]

CMD ["npm", "start"]