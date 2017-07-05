FROM node:8

WORKDIR /app

COPY . /app

EXPOSE 8080

CMD npm install && npm run dev
