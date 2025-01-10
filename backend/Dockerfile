# Dockerfile
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm install -g nodemon
CMD ["npm", "run", "dev"]
EXPOSE 5000
