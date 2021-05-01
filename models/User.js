const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    usuario: {type: String, required: true},
    mail: {type: String, required: true},
    contraseña: {type: String, required: true},
    imagen: {type: String, required: true},
    pais: {type: String, required: true},
    ingresoGoogle: {type: Boolean}
})
const User = mongoose.model('user', userSchema)

module.exports = User