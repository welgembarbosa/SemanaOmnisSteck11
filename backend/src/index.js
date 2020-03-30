const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
Metodos Http:
GET: Buscar/Listar
POST
PUT
DELETE
*/

/*
Query Params: "request.query"  Parametros nomeados enviados na rota apos o "?" (Filtros, Paginação)
Route Params: "request.params" utilizado para identificar recurso
Request Body: "request.body"   Corpo da requisição, utilizado para crir ou deletar recursos
*/

/* 
SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
NoSQL: MongoDb. CouchDB
*/

app.listen(3333);
