FROM node:18

WORKDIR /app

COPY . /app

EXPOSE 8080

RUN npm install serve -g

RUN npm install --no-optional && npm run build

CMD server ./dist
