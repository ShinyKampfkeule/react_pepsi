FROM node as builder
ENV NODE_ENV production
COPY . /app
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci --silent
RUN npm i react-scripts@5.0.0 -g -silent
RUN npm run build
CMD ["npm", "start"]

FROM nginx:stable-alpine
ENV NODE_ENV production
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]