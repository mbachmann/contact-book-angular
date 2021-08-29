
FROM nginx:1.13.3

VOLUME /var/cache/nginx

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/


RUN rm -rf /usr/share/nginx/html/*

COPY  dist/contact-book-angular /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
