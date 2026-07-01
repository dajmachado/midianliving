# Stage 1: build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: serve
FROM nginx:alpine
RUN mkdir -p /usr/share/nginx/html/descubriendo-el-proposito
COPY --from=builder /app/dist /usr/share/nginx/html/descubriendo-el-proposito
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
