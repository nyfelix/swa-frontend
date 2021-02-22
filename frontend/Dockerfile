FROM node:latest

WORKDIR /var/www/app

COPY package*.json ./
RUN apt-get install npm -y
COPY . .
# RUN npm i @vue/cli
# RUN rm -rf node_modules package-lock.json && npm install
EXPOSE 8080

CMD ["npm", "run", "dev"]
