# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY frontend/package*.json ./
RUN apt-get update -qq && apt-get install -y build-essential nodejs
RUN npm install
COPY frontend .
RUN npm run build

# production stage
FROM nginxinc/nginx-unprivileged as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]