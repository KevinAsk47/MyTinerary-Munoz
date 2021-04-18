const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
    pais: {type: String, required: true},
    titulo: {type: String, required: true},
    descripcion: {type: String, required: true},
    imagen: {type: String, required: true},
    bandera: {type: String, required: true}
})

const City = mongoose.model('city', citySchema)

module.exports = City