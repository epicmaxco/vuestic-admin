FROM node:14

WORKDIR /app

COPY . /app

EXPOSE 8080

RUN npm install http-server -g

RUN npm install --no-optional && npm run build

CMD http-server ./dist
