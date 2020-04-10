FROM alpine:3.10

RUN apk update && apk add --no-cache bash curl dumb-init
RUN apk update && apk add --no-cache nodejs npm yarn

RUN mkdir /app
WORKDIR /app

RUN npm install -g serve
COPY build/ /app
COPY docker-entrypoint.sh /

EXPOSE 3000
CMD ["npm", "start"]