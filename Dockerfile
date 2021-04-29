FROM node:14.16.1-alpine3.13

RUN mkdir /app

WORKDIR /app

COPY . .

EXPOSE 8002
CMD [ "npm", "run", "start" ]
CMD gatsby build
CMD gatsby serve -H 0.0.0.0
