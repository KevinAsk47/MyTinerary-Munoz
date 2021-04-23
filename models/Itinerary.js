const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    personaNombre: {type: String, required: true},
    personaImagen: {type: String, required: true},
    precio: {type: Number, required: true, min: 1, max: 5},
    duracion: {type: Number, required: true},
    likes: {type: Number, default: 0, min: 0},
    userLiked: [{type: String}],
    hashtag: [{type: String}],
    comentarios: [{idUser: {type: mongoose.Types.ObjectId, ref: 'user'}, comentario: {type: String}}],
    idCity: {type: mongoose.Types.ObjectId, ref: 'city'}
})
const Itinerary = mongoose.model('itinerary', itinerarySchema)

module.exports = Itinerary