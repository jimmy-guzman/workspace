FROM registry.jimmy.codes/nginx
COPY apps/portfolio/dist/ /var/www/portfolio/
COPY .storybook/dist/ /var/www/stories/
COPY nginx.conf /etc/nginx/conf.d/default.conf
