FROM node:14.16.1-alpine:3.7

RUN mkdir /app

WORKDIR /app

COPY . .

RUN npm install
RUN gatsby build

EXPOSE 8000

CMD "npm" "start"
