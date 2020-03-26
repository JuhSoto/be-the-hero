const express = require('express'); 
const cors = require('cors')
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

/**METODOS HTTP
*GET: Buscar/listar uma informação do backend
*POST: Criar uma informação no backend
*PUT: Alterar uma informação no backend
*DELETE: Deletar uma informação no backend
**/
/**TIPOS DE PARAMENTROS
*Query Params: Parametros nomeados enviados na rota após "?" (Filtros, paginação)
*Route Params: Parametros utilizados para identificar recursos 
*Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 
**/

/**
 * SQL: MySQL, SQLite, PostegreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */
/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */





