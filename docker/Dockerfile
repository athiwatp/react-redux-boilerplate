FROM nginx:alpine

COPY dist /usr/share/nginx/html

RUN mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.old

COPY docker/nginx/custom.conf /etc/nginx/conf.d/custom.conf
