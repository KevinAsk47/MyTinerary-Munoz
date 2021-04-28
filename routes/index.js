const express = require('express')
const router = express.Router()
const cityControllers = require('../controllers/cityControllers')
const itineraryControllers = require('../controllers/itineraryControllers')
const userControllers = require('../controllers/userControllers')
const validador = require('../config/validador')

const { todasLasCiudades, agregarCiudad, ciudadIndividual, borrarCiudad, actualizarCiudad } = cityControllers
const { agregarItinerario, todosLosItinerarios, borrarItinerario, actualizarItinerario, itinerarioIndividual, itinerariosPorCiudad } = itineraryControllers
const { registrarUsuario, loagearUsuario } = userControllers

router.route('/ciudades')
.get(todasLasCiudades)
.post(validador, agregarCiudad)

router.route('/ciudad/:id')
.get(ciudadIndividual)
.delete(borrarCiudad)
.put(actualizarCiudad)

router.route('/itinerarios')
.get(todosLosItinerarios)
.post(agregarItinerario)

router.route('/itinerario/:id')
.get(itinerarioIndividual)
.delete(borrarItinerario)
.put(actualizarItinerario)

router.route('/itinerarios/ciudad/:id')
.get(itinerariosPorCiudad)

router.route('/userSignUp')
.post(registrarUsuario)

router.route('/userLogIn')
.post(loagearUsuario)

module.exports = router