/** @format */

const { response } = require('express');

const getMedicos = (req, resp = response) => {
	resp.json({
		ok: true,
		msg: 'getMedicos',
	});
};

const crearMedico = (req, resp = response) => {
	resp.json({
		ok: true,
		msg: 'crearMedico',
	});
};

const actualizarMedico = (req, resp = response) => {
	resp.json({
		ok: true,
		msg: 'actualizarMedico',
	});
};

const borrarMedico = (req, resp = response) => {
	resp.json({
		ok: true,
		msg: 'borrarMedico',
	});
};
module.exports = {
	getMedicos,
	crearMedico,
	actualizarMedico,
	borrarMedico,
};
