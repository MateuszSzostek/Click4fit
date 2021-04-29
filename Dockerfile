FROM node:14.16.1-alpine3.13

RUN mkdir /app

WORKDIR /app

COPY . .
RUN npm install

EXPOSE 8002

CMD npm run build
