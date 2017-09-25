FROM node:8.5.0

RUN mkdir -p /usr/src/appp
WORKDIR /usr/src/appp
COPY package.json /usr/src/appp/
RUN npm install
COPY . /usr/src/appp 

EXPOSE 8081

ENTRYPOINT ["node", "server.js"]