FROM node:12

COPY . /app

WORKDIR /app

COPY package*.json ./

RUN npm install
# Build application
RUN npm run build



ENV PORT=8888

EXPOSE 8888

CMD ["node", "dist/src/index.js"]