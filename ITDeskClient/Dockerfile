# Stage 1: Build the application
FROM node:20.16 AS build

# Set working directory
WORKDIR /app

COPY ["./ITDeskClient/package*.json" ,"./"]

RUN npm install --force

COPY ["./ITDeskClient/" ,"./"]


# Build the Vite application for production
RUN npm run build

# Stage 2: Serve the application
FROM nginx:alpine

# Copy the build files from the build stage
COPY --from=build /app/dist/itdesk-client/browser/ /usr/share/nginx/html

# Copy custom Nginx configuration file if you have one
COPY --from=build /app/nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]