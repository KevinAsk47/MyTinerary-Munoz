const express = require('express')
const router = express.Router()
const cityControllers = require('../controllers/cityControllers')
const validador = require('../config/validador')
const itineraryControllers = require('../controllers/itineraryControllers')

const {todasLasCiudades,agregarCiudad,ciudadIndividual,borrarCiudad,actualizarCiudad} = cityControllers
const {agregarItinerario,todosLosItinerarios,borrarItinerario,actualizarItinerario,itinerarioIndividual,itinerariosPorCiudad} = itineraryControllers

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

module.exports = router