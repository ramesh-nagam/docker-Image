
#STAGE 1: Build
FROM node:latest as node

WORKDIR /app

COPY package.json package-lock.json ./
RUN true
RUN npm config set proxy http://3.28.29.241:88 && \

    npm config set https_proxy https://3.28.29.241:88 && \

    npm config set registry https://blr-artifactory.cloud.health.ge.com/artifactory/api/npm/npm-snapshot-eis-all/

RUN npm install
COPY . .

RUN npm run build


#STAGE 2: Run
FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=node /app/dist/dcar-algo-server /usr/share/nginx/html
EXPOSE 4200

