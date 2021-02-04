/** @format */

/*
Path: '/api/login'
 */
const { Router } = require('express');
const { login } = require('../controlers/auht');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campo');

const router = Router();

router.post(
	'/',
	[
		check('email', 'El email es obligatorio').isEmail(),
		check('password', 'El password es obligatorio').not().isEmpty(),
		validarCampos,
	],
	login
);

module.exports = router;
