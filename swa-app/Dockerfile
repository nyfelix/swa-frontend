# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY test-app/package.json /app/package.json
RUN npm install
RUN npm install @vue/cli@4.5.11 -g

# start app
CMD ["npm", "run", "serve"]