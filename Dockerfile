FROM registry.jimmy.codes/nginx
COPY apps/portfolio/dist/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
