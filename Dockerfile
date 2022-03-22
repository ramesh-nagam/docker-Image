FROM nginx:1.17.1-alpine
COPY /dist/DCAR_Algo_Server /usr/share/nginx/html
#Copy default nginx configuration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 4200