# food-app-be
## Usage
1 - Create new dir called "food-app"

2 - Enter dir and clone this repo

3 - Also, clone this repo https://github.com/guilhermeneugenio/food-app-fe.git

4 - In the "food-app" dir create the following docker-compose.yml file
```
version: '3.1'
services:
  mysql:
    image: mysql:5.7
    container_name: mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: Password123#
      MYSQL_DATABASE: food-app
      MYSQL_USER: server
      MYSQL_PASSWORD: Password123#
    volumes:
      - food-data:/var/lib/mysql
    ports:
      - '3306:3306'
  adminer:
    image: adminer
    restart: always
    ports:
      - 81:8080
  food-app-be:
    container_name: food-app-be
    build:
      context: ./food-app-be
      dockerfile: Dockerfile
    ports:
      - '5000:5000'
    volumes:
       - ./food-app-be:/usr/src/app/food-app-be
       - /usr/src/app/food-app-be/node_modules
    environment:
      - CHOKIDAR_USEPOLLING=true
    depends_on:
      - mysql
  food-app-fe:
    container_name: food-app-fe
    build:
      context: ./food-app-fe
      dockerfile: Dockerfile
    ports:
      - '8080:8080'
    volumes:
       - ./food-app-fe:/usr/src/app/food-app-fe
       - /usr/src/app/food-app-fe/node_modules
    environment:
      - CHOKIDAR_USEPOLLING=true
    depends_on:
      - food-app-be
volumes:
  food-data:
```
5 - Run
```
docker-compose -f docker-compose.yml up -d
```
