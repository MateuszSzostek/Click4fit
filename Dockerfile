FROM node:14.16.1-alpine3.13

RUN mkdir /data
RUN chown -R root:root /data
RUN chmod -R 666 /data

COPY build /data


CMD  cp -Rv /data/* /usr/share/nginx/html/
