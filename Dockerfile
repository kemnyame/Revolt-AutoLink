FROM node:22-alpine
WORKDIR /app
COPY package.json server.js schema.sql ./
COPY public ./public
RUN mkdir -p /app/data /app/uploads
ENV PORT=3000
EXPOSE 3000
CMD ["node","server.js"]
