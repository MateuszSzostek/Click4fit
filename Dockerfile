FROM alpine:3.7

run mkdir /app

workdir /app

copy . .

run npm install
run gatsby build

EXPOSE 8000

CMD "npm" "start"
