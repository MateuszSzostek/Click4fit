FROM node:14.16.1-alpine3.13

RUN mkdir /app

WORKDIR /app

COPY . .

EXPOSE 8002

CMD npm run build
