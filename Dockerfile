FROM nginx:alpine
RUN mkdir -p /usr/share/nginx/html/descubriendo-el-proposito
COPY dist /usr/share/nginx/html/descubriendo-el-proposito
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
