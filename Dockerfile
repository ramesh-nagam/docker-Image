FROM node:14.19.0 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:latest
COPY --from=node /DCAR_Algo_Server/dist/dcar-algo-server/usr/share/nginx/html

