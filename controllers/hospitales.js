/** @format */

const { response } = require('express');

const getHospitales = (req, resp = response) => {
	resp.json({
		ok: true,
		msg: 'getHospitales',
	});
};

const crearHospital = (req, resp = response) => {
	resp.json({
		ok: true,
		msg: 'crearHospital',
	});
};

const actualizarHospital = (req, resp = response) => {
	resp.json({
		ok: true,
		msg: 'actualizarHospital',
	});
};

const borrarHospital = (req, resp = response) => {
	resp.json({
		ok: true,
		msg: 'borrarHospital',
	});
};
module.exports = {
	getHospitales,
	crearHospital,
	actualizarHospital,
	borrarHospital,
};
