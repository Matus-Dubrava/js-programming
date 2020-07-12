FROM node:14-stretch-slim

ENV PORT 3000

EXPOSE $PORT

WORKDIR /node/app

COPY ./package*.json ./

RUN npm install --only=prod && npm cache clean --force

COPY . . 

CMD ["npm", "start"]