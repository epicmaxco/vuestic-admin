FROM node:18

WORKDIR /app

COPY . /app

EXPOSE 3000

RUN npm install --no-optional && npm run build:ci

RUN npm install serve -g

CMD npm run start:ci
