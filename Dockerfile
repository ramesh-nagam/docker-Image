FROM node:latest
WORKDIR /app


COPY package.json package-lock.json
COPY . .
RUN  npm install   
RUN npm run build
EXPOSE 4200

CMD npm start