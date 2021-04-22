const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    personaNombre: {type: String, required: true},
    personaImagen: {type: String, required: true},
    precio: {type: Number, required: true},
    duracion: {type: Number, required: true},
    likes: {type: Number, required: true},
    userLiked: [String],
    hashtag: [String],
    comentarios: [{userId: _id(User), comentario: String}],
    idCity: _id(City)
})

const Itinerary = mongoose.model('itinerary', itinerarySchema)

module.exports = Itinerary