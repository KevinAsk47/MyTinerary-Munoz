const express = require('express')
const router = express.Router()
const cityControllers = require('../controllers/cityControllers')
const validador = require('../config/validador')

const {todasLasCiudades,agregarCiudad,ciudadIndividual,borrarCiudad,actualizarCiudad} = cityControllers

router.route('/ciudades')
.get(todasLasCiudades)
.post(validador, agregarCiudad)

router.route('/ciudad/:id')
.get(ciudadIndividual)
.delete(borrarCiudad)
.put(actualizarCiudad)

module.exports = router