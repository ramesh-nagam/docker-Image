FROM node:latest
WORKDIR /app



COPY package.json package-lock.json
COPY . .
RUN npm install -g npm@8.5.5
RUN npm install -g @angular/cli
EXPOSE 4200



CMD ["ng", "serve", "--host", "0.0.0.0"]