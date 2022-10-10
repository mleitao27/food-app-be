FROM node:latest
WORKDIR /usr/src/app/food-app-be
COPY . ./
RUN npm install
EXPOSE 5000
CMD ["npm", "run", "dev"]