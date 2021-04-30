FROM node:14.16.1-alpine3.13

RUN mkdir /app

WORKDIR /app

COPY ./public/ .
RUN ls
EXPOSE 8002
CMD cp --from=builder /app/public /usr/share/nginx/html

