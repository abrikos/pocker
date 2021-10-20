FROM node:14.17.6 AS build
WORKDIR /usr/src/frontend
COPY . .
RUN npm install
RUN npm run build

### STAGE Nginx: Run ###
FROM nginx:1.21.3
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/frontend/build /usr/share/nginx/html
