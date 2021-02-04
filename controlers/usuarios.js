/** @format */
const { response } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');

const getUsuarios = async (req, resp) => {
	const usuarios = await Usuario.find({}, 'nombre email role google');

	resp.json({
		ok: true,
		usuarios,
	});
};

const crearUsuario = async (req, resp = response) => {
	const { email, password } = req.body;

	try {
		const existeEmail = await Usuario.findOne({ email });

		if (existeEmail) {
			return resp.status(400).json({
				ok: false,
				msg: 'El correo ya esta registrado',
			});
		}
		const usuario = new Usuario(req.body);

		//Encriptar contraseña
		const salt = bcryptjs.genSaltSync();
		usuario.password = bcryptjs.hashSync(password, salt);

		//Guardar usuario
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
const actualizarUsuario = async (req, resp = response) => {
	const uid = req.params.id;
	try {
		const usuarioDB = await Usuario.findById(uid);

		if (!usuarioDB) {
			return resp.status(404).json({
				ok: false,
				msg: 'No existe un usuario por ese id',
			});
		}

		if (usuarioDB.email === req.body.email) {
			delete campos.email;
		} else {
			const existeEmail = await Usuario.findOne({ email: req.body.email });
			if (existeEmail) {
				return resp.status(400).json({
					ok: false,
					msg: 'Ya existe un usuario con ese email',
				});
			}
		}

		//Actualizaciones
		const campos = req.body;
		delete campos.password;
		delete campos.google;

		const usuarioActualizado = await Usuario.findByIdAndUpdate(uid, campos, {
			new: true,
		});

		resp.json({
			ok: true,
			usuario: usuarioActualizado,
		});
	} catch (error) {
		console.log(error);
		resp.status(500).json({
			ok: false,
			msg: 'Error inesperado',
		});
	}
};

module.exports = {
	getUsuarios,
	crearUsuario,
	actualizarUsuario,
};
