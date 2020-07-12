FROM node:14-stretch-slim

WORKDIR /react/app

COPY ./package*.json ./

RUN npm install 

COPY . .

CMD ["npm", "run", "dev"]