FROM alpine:3.7

RUN mkdir /app

WORKDIR /app

COPY . .

RUN npm install
RUN gatsby build

EXPOSE 8000

CMD "npm" "start"
