FROM mhart/alpine-node:7

RUN apk add --no-cache git

RUN mkdir -p /opt/app
COPY ./ /opt/app

RUN cd /opt/app && \
  npm i yarn -g && \
  yarn

RUN apk del git

CMD cd /opt/app && \
  npm start

EXPOSE 3333:3333

