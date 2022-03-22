FROM node:14.19.0 as node
WORKDIR /app


COPY package.json package-lock.json
COPY . .
RUN npm install 
RUN npm install -g @angular/cli 
COPY --from=node /app/dist/dcar-algo-server /usr/share/nginx/html 
EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
