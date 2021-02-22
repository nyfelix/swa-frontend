# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend .
RUN apt-get install npm -y

# production stage
FROM nginxinc/nginx-unprivileged as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
