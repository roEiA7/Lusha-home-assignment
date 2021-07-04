# Stage 1: Compile and Build angular codebase

FROM node:latest as build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build


# Stage 2: Serve app with nginx server
FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/ums /usr/share/nginx/html