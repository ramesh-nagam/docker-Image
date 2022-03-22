FROM node:14.19.0 as node
WORKDIR /app


COPY package.json
COPY . .
RUN  npm install   
RUN npm run build
EXPOSE 4200

CMD npm start