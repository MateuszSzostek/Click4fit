FROM node:14.16.1-alpine3.13

RUN mkdir /app

WORKDIR /app

COPY . .

RUN ls

RUN ls /app

EXPOSE 8002

CMD npm run build
