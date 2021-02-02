/** @format */
const express = require('express');

//Crear el servidor Express
const app = express();

app.listen(3000, () => {
	console.log('Servidor corrioento en puerto', 3000);
});
