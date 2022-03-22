FROM node:14.19.0 as node
WORKDIR /app


COPY package.json package-lock.json
COPY . .
RUN npm install 
RUN npm install -g @angular/cli 
COPY --from=node /app/dist/dcar-algo-server /usr/share/nginx/html/dcar-algo-serve
EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]
