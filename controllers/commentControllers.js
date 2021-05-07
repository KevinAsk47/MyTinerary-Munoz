const Itinerary = require('../models/Itinerary')

const commentControllers = {
    cargarComentario: async (req,res) => {
        const { comentario } = req.body 
        const idUser = req.user._id
        const id = req.params.id

        var respuesta;
        var error;

        try {
            const comentarioParaAgregar = await Itinerary.findOneAndUpdate({ _id: id }, { $push: { comentarios: {comentario: comentario, idUser: idUser}}},{new:true}).populate('comentarios.idUser')
            comentarioParaAgregar.save()
            respuesta = comentarioParaAgregar
        } catch(error) {
            error = 'An unexpected error has occurred with our servers'
        }

        res.json({
            success: !error ? true : false,
            respuesta: !error && respuesta,
            error: error
        })
    },

    borrarComentario: async (req, res) => {
        const id = req.params.id
        const { idComentario } = req.body

        var respuesta;
        var error;

        try {
            const borrarComentario = await Itinerary.findOneAndUpdate({ _id: id },{ $pull: { comentarios: {_id: idComentario}}},{new:true})
            borrarComentario.save()
            respuesta = borrarComentario
        } catch(error) {
            error = 'An unexpected error has occurred with our servers'
        }   
    
        res.json({
            success: !error ? true : false,
            respuesta: !error && respuesta,
            error: error
        })
    },

    modificarComentario: async (req, res) => {
        const id = req.params.id
        const { comentario } = req.body.info
        const { idComentario } = req.body
        const idUser = req.user._id

        var respuesta;
        var error;

        try {
            const modificarComentario = await Itinerary.findOneAndUpdate({ _id: id, "comentarios._id": idComentario }, { $set: { "comentarios.$.comentario": comentario } },{new:true})
            modificarComentario.save()
            respuesta = modificarComentario
        } catch(error) {
            error = 'An unexpected error has occurred with our servers'
        }   
    
        res.json({
            success: !error ? true : false,
            respuesta: !error && respuesta,
            error: error
        }) 
    }
}


module.exports = commentControllers