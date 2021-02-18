### base image
FROM node:latest

### set working directory
WORKDIR /var/www/app

### add `/app/node_modules/.bin` to $PATH
#ENV PATH /var/www/app/node_modules/.bin:$PATH

### install and cache app dependencies
COPY package*.json ./
RUN npm install
COPY . .
#RUN npm install @vue/cli@4.5.11 -g

EXPOSE 8082


# start app
CMD ["npm", "run", "dev"]