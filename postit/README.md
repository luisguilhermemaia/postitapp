Instalar NodeJs e NPM


1 - Criar banco postgres e configurar no config.json :

ex: 
{
  "development": {
    "username": "postgres",
    "password": null,
    "database": "dev",  <--- nome do banco criado
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgres"
  }
}

2- instalar os pacotes npm
$ npm install

3- definir variável global
$ export NODE_ENV=development

4- rodar as Migrations
$ sequelize db:migrate

5- rodar o server
$ npm run start:dev
