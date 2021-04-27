from node:14.16.1-alpine3.13

run mkdir /app

workdir /app

copy . .

run npm install joi
run gatsby build

EXPOSE 8000

CMD "npm" "start"
