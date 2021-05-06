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

        console.log(id)
        console.log(idComentario)

        var respuesta;
        var error;

        try {
/*             const borrarComentario = await Itinerary.findOneAndRemove({ _id: id },{ $pop: { comentarios: {_id: idComentario}}})
            console.log(borrarComentario)  */
/*             borrarComentario.save() */
/*             const itinerarios = await Itinerary.find()
            respuesta = itinerarios */
        } catch(error) {
            error = 'An unexpected error has occurred with our servers'
        }   
    
 
       /*  console.log(respuesta)  */

/*         res.json({
            success: !error ? true : false,
            respuesta: !error && respuesta,
            error: error
        }) */
    }
}


module.exports = commentControllers