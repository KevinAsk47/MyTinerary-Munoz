const express = require('express')
const router = express.Router()
const cityControllers = require('../controllers/cityControllers')
const itineraryControllers = require('../controllers/itineraryControllers')
const userControllers = require('../controllers/userControllers')
const validador = require('../config/validador')
const passport = require('passport')

const { todasLasCiudades, agregarCiudad, ciudadIndividual, borrarCiudad, actualizarCiudad } = cityControllers
const { agregarItinerario, todosLosItinerarios, borrarItinerario, actualizarItinerario, itinerarioIndividual, itinerariosPorCiudad } = itineraryControllers
const { registrarUsuario, loagearUsuario, loginForzado } = userControllers

router.route('/ciudades')
.get(todasLasCiudades)
.post(agregarCiudad)

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
.post(validador, registrarUsuario)

router.route('/userLogIn')
.post(loagearUsuario)

router.route('/user/loginLS')
.get(passport.authenticate('jwt', {session: false}), loginForzado)

module.exports = router