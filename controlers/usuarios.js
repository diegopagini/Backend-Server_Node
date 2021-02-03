/** @format */

const Usuario = require('../models/usuario');

const getUsuarios = (req, resp) => {
	resp.json({
		ok: true,
		msg: 'get Usuarios',
	});
};

const crearUsuario = async (req, resp) => {
	const { email, password, nombre } = req.body;

	const usuario = new Usuario(req.body);

	await usuario.save();

	resp.json({
		ok: true,
		usuario: usuario,
	});
};

module.exports = {
	getUsuarios,
	crearUsuario,
};
