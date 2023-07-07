# KuantoKusta challenge

# Cart Service
For the challenge, two microservices and an API were created, which centralizes the resources and serves as a gateway.

The first service was written using NestJS, Postgres, and TypeORM.
The service already includes a Docker configuration that is responsible for spinning up the Nest service and the PostgreSQL database.

# Product Service
The second service was also written using NestJS, but it utilizes a MongoDB database and Mongoose as the ODM for product data modeling.

# Requirement

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

