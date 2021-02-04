/** @format */
const { response } = require('express');
const Usuario = require('../models/usuario');

const getUsuarios = async (req, resp) => {
	const usuarios = await Usuario.find({}, 'nombre email role google');

	resp.json({
		ok: true,
		usuarios,
	});
};

const crearUsuario = async (req, resp = response) => {
	const { email, password, nombre } = req.body;

	try {
		const existeEmail = await Usuario.findOne({ email });

		if (existeEmail) {
			return resp.status(400).json({
				ok: false,
				msg: 'El correo ya esta registrado',
			});
		}
		const usuario = new Usuario(req.body);
		await usuario.save();

		resp.json({
			ok: true,
			usuario: usuario,
		});
	} catch (error) {
		console.log(error);
		resp.status(500).json({
			ok: false,
			msg: 'Error inesperado... Revisar logs',
		});
	}
};

module.exports = {
	getUsuarios,
	crearUsuario,
};
