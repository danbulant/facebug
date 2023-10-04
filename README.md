# Facebug

Facebug is a simple web application that allows you to search for people by their first and last name.

## Build instructions

```bash
# build an image
docker build -t haxagon/facebug .

# push an image to private registry
docker push haxagon/facebug
```

## Development

```bash
# install dependencies
npm install

# build
npm run build

# start local mysql database server
docker run -d -p 3306:3306 --name mysql-docker-container -e MYSQL_ROOT_PASSWORD=facebug -e MYSQL_DATABASE=facebug -e MYSQL_USER=facebug -e MYSQL_PASSWORD=facebug mysql/mysql-server:latest

# start the application
./node_modules/nodemon/bin/nodemon.js lib/app.js
```

## API

### GET /search

```bash
curl 'localhost:3000/search?firstName=Brad&lastName=Pitt'
```
