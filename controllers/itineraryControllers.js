const Itinerary = require('../models/Itinerary')

const itineraryControllers = {
    todosLosItinerarios: async (req, res) => {
        try {
            const itinerarios = await Itinerary.find()
            res.json({success: true, respuesta: itinerarios})
        } catch(error) {
            res.json({success: false, respuesta: 'An unexpected error has occurred with our servers'})
        }
    },

    agregarItinerario: async (req,res) => {
        try {
            const itinerarioAGuardar = new Itinerary(req.body)
            await itinerarioAGuardar.save()
            const itinerarios = await Itinerary.find()
            res.json({success: true, respuesta: itinerarios})    
        } catch(error) {
            res.json({success: false, respuesta: 'An unexpected error has occurred with our servers'})
        }
    },

    borrarItinerario: async (req, res) => {
        const id = req.params.id
        try {
            await Itinerary.findOneAndDelete({_id: id})
            const itinerarios = await Itinerary.find()
            res.json({success: true, respuesta: itinerarios}) 
        } catch(error) {
            res.json({success: false, respuesta: 'An unexpected error has occurred with our servers'})
        }
    },

    actualizarItinerario: async (req, res) => {
        const id = req.params.id
        try {
            await Itinerary.findOneAndUpdate({_id: id}, {...req.body}, {new: true})
            const itinerarios = await Itinerary.find()
            res.json({success: true, respuesta: itinerarios})
        } catch(error) {
            res.json({success: false, respuesta: 'An unexpected error has occurred with our servers'})
        }
    },

    itinerarioIndividual: async (req, res) => {
        const id = req.params.id 
        try {        
            const itinerario = await Itinerary.findById(id).populate('idCity')
            await res.json({success: true, respuesta: itinerario}) 
        } catch(error) {
            res.json({success: false, respuesta: 'An unexpected error has occurred with our servers'})
        }
    },

    itinerariosPorCiudad: async (req, res) => {
        const id = req.params.id
        try {        
            const itinerarios = await Itinerary.find({idCity : id})
            await res.json({success: true, respuesta: itinerarios}) 
        } catch(error) {
            res.json({success: false, respuesta: 'An unexpected error has occurred with our servers'})
        }
    }
}

module.exports = itineraryControllers

