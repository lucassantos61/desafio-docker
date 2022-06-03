
FROM nginx:1.21.6-alpine

# Removing default configuration
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx","-g", "daemon off;"]