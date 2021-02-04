/** @format */

const { response } = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');

const login = async (req, resp = response) => {
	const { email, password } = req.body;

	try {
		//Verigicar email

		const usuarioDB = await Usuario.findOne({ email });
		if (!usuarioDB) {
			return resp.status(400).json({
				ok: false,
				msg: 'Email no encontrado',
			});
		}

		// Verificar contraseña
		const validPassword = bcryptjs.compareSync(password, usuarioDB.password);
		if (!validPassword) {
			return resp.status(400).json({
				ok: false,
				msg: 'Contraseña no valida',
			});
		}

		//Generar un TOKEN - JWT

		resp.json({
			ok: true,
			msg: 'Hola',
		});
	} catch (error) {
		console.log(error);
		resp.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
		});
	}
};

module.exports = {
	login,
};
