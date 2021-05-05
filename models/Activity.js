const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    imagen: {type: String, required: true},
    idItinerary: {type: mongoose.Types.ObjectId, ref: 'itinerary'},
})
const Activity = mongoose.model('activity', activitySchema)

module.exports = Activity