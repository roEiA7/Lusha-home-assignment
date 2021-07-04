FROM node:12-alpine as build-step

WORKDIR /ums-client

COPY ./package.json ./

RUN npm install

COPY . .

CMD [ "node","./bin/www" ]

