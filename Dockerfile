FROM node:14.16.1-alpine3.13

RUN mkdir usr/src/app

WORKDIR usr/src/app

COPY . .

EXPOSE 8002

CMD ["./run.sh"]
