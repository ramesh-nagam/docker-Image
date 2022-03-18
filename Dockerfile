FROM node:14.19.0 as node
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .

RUN npm install
COPY ..

CMD /usr/src/app/node_modules/.bin/ng serve --host 0.0.0.0 --disableHostCheck