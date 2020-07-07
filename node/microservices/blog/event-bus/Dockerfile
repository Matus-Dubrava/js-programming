FROM node:14-stretch-slim

ENV TINI_VERSION v0.19.0
ENV POSTS_URL http://posts-srv:4000
ENV COMMENTS_URL http://comments-srv:4001
ENV QUERY_URL http://query-srv:4002
ENV MODERATION_URL http://moderation-srv:4003
ENV PORT 4005

EXPOSE $PORT

ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini

WORKDIR /node/app

COPY ./package*.json ./

RUN npm install && npm cache clear --force

COPY . .

ENTRYPOINT ["/tini", "--"]

CMD ["npm", "start"]