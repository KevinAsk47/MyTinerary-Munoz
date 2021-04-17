const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
    pais: {type: String},
    titulo: {type: String, required: true},
    descripcion: {type: String},
    imagen: {type: String, required: true},
    bandera: {type: String}
})

const City = mongoose.model('city', citySchema)

module.exports = City