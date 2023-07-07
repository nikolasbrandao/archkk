FROM node:18-alpine as development

WORKDIR /app

COPY package*.json ./

COPY package-lock.json ./

RUN npm ci

COPY . .

# RUN npm run build

RUN rm -rf dist
