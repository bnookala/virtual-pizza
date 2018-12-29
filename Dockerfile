FROM node:stretch

WORKDIR /app
ADD . /app

RUN rm -rf /app/node_modules && npm install

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start" ]