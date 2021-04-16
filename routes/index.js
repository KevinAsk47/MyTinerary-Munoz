const express = require('express')
const router = express.Router()
const cityControllers = require('../controllers/cityControllers')


const {todasLasCiudades,agregarCiudad} = cityControllers

router.route('/ciudades')
.get(todasLasCiudades)
.post(agregarCiudad)

module.exports = router