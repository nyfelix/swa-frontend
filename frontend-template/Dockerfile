FROM node:latest

WORKDIR /var/www/app

COPY package*.json ./
RUN npm install
COPY . .
# RUN npm i @vue/cli
# RUN rm -rf node_modules package-lock.json && npm install
EXPOSE 8081

CMD ["npm", "run", "dev"]