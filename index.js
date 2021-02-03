/** @format */
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

//Crear el servidor Express
const app = express();

//Configurar CORS
app.use(cors());

//Base de datos;
dbConnection();

//Rutas
app.get('/', (req, resp) => {
	resp.json({
		ok: true,
		mgs: 'Hola Mundo',
	});
});

app.listen(process.env.PORT, () => {
	console.log('Servidor corrioento en puerto', process.env.PORT);
});
