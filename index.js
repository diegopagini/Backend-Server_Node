/** @format */
const express = require('express');

//Crear el servidor Express
const app = express();

//Rutas
app.get('/', (req, resp) => {
	resp.json({
		ok: true,
		mgs: 'Hola Mundo',
	});
});

app.listen(3000, () => {
	console.log('Servidor corrioento en puerto', 3000);
});
