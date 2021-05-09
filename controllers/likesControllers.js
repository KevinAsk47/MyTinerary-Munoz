const Itinerary = require('../models/Itinerary')
const User = require('../models/User')

const likesControllers = {
    likear: async (req,res) => {
        const id = req.params.id
        const idUser = req.user._id

        
        var respuesta;
        var error;

        const mailUsuario = await User.findOne({_id: idUser})
        const itinerarioLiked = await Itinerary.findOne({_id: id , userLiked: mailUsuario.mail})

        try {
            if (itinerarioLiked) {
                const likeItinerario = await Itinerary.findOneAndUpdate({ _id: id },{ $pull: { userLiked: mailUsuario.mail}},{new:true})
                likeItinerario.save()
                respuesta = {likeItinerario, flag: true} 
            } else {
                const likeItinerario = await Itinerary.findOneAndUpdate({ _id: id },{ $push: { userLiked: mailUsuario.mail}},{new:true})
                likeItinerario.save()
                respuesta = {likeItinerario, flag: false} 
            }
        } catch(error) {
            error = 'An unexpected error has occurred with our servers'
        }

        res.json({
            success: !error ? true : false,
            respuesta: !error && respuesta,
            error: error
        })
    },
}


module.exports = likesControllers