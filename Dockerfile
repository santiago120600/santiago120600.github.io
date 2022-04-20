FROM node:17-alpine3.14

# set working directory
WORKDIR /app

COPY . .
# use ADD only in specific scenarios

# install app dependencies
RUN npm install && npm cache clean --force

#RUN npm run build

# start app
CMD ["npm", "start"]
# use node instead of npm 
# npm requires another application to run
