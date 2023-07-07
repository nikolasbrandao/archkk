# KuantoKusta challenge

## Cart Service
For the challenge, two microservices and an API were created, which centralizes the resources and serves as a gateway.

The first service was written using NestJS, Postgres, and TypeORM.
The service already includes a Docker configuration that is responsible for spinning up the Nest service and the PostgreSQL database.

## Product Service
The second service was also written using NestJS, but it utilizes a MongoDB database and Mongoose as the ODM for product data modeling.

## Product Cart Api
The third artifact of our solution is the product cart API. This API is responsible for retrieving information from the product service and consolidating that information in the cart service. 

## Requirement

You only need to have Docker and NestJS installed. In case you want to know how to install them, here are the tutorials:

[How to install NestJS](https://docs.nestjs.com/first-steps#prerequisites)

[How to install Docker](https://www.knowledgehut.com/blog/devops/docker-installation)

Afterwards, you will need to enter the following commands in the terminal.

```bash
# Dando permissão de execução para o arquivo init.sh
sudo chmod +x init.sh

# executando o comando
./init.sh
```

At the end of the command execution, all services, databases, and the API will be up and running.

## Using the solution

All services already have a small seed of example data for better usage without the need to create new items in the database.

### Product service

The product service is the only one among the services that does not have Swagger documentation.
This was a choice based on the size of the project, which aims to retrieve product information.
The product service has three routes that work for creating and retrieving products.

> The product creation route was added to provide more autonomy to those who want to use the solution without needing direct access to the database.

### - POST [products]

```bash
curl -X 'POST' \
  'http://localhost:3001/products' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "productID": 42,
  "price": 42.42
}'
```

The route returns a status 201 and the object that was persisted in the database.

### - GET [all products]

```bash
curl -X 'GET' \
  'http://localhost:3001/products' \
  -H 'accept: */*'
```

This route returns all persisted products.

> O serviço ja inicia com dois produtos persistidos

```json
[{"productID":1234,"price":22.32},{"productID":1233,"price":22.32},]
```

### - GET [single product]

```bash
curl -X 'GET' \
  'http://localhost:3000/products/1234' \
  -H 'accept: */*'
```