FROM node:14.17.6 AS build
WORKDIR /usr/src/backend
COPY . .
RUN npm install
##RUN npm run server
EXPOSE 30001
ENTRYPOINT ["npm","run","server-prod"]

