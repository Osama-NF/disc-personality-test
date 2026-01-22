# -------- Stage 1: build React app --------
FROM node:18-alpine AS build
WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# -------- Stage 2: serve with Nginx --------
FROM nginx:alpine

# Copy build output to Nginx html dir
COPY --from=build /app/build /usr/share/nginx/html

# Expose port and run nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
