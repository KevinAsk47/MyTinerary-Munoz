const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    nombre: {type: String, required: true, min: 2},
    apellido: {type: String, required: true, min: 2},
    usuario: {type: String, required: true},
    mail: {type: String, required: true},
    contraseña: {type: String, required: true},
    imagen: {type: Number,},
    pais: {type: String}
})
const User = mongoose.model('user', userSchema)

module.exports = User