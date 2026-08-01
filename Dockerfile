################################################################################
# Use node image for base image for all stages.
FROM node:20.19.0-alpine AS base

# Set working directory for all build stages.
WORKDIR /usr/src/app

# Copy lockfiles
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
# Stage 2: Serve the app with Nginx

FROM nginx:alpine
# Copy the build output from the first stage to Nginx
COPY --from=base /usr/src/app/dist /usr/share/nginx/html

CMD [ "nginx" , "-g" , "deamon off;" ]
# EXPOSE the internal port NPM will look for
EXPOSE 80
