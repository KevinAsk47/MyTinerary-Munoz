const Itinerary = require('../models/Itinerary')

const commentControllers = {
    cargarComentario: async (req,res) => {
        const { idUser , comentario } = req.body 

        var respuesta;
        var error;

        try {
            const comentarioAGuardar = await Itinerary.push({
                comentarios: [{idUser,comentario}],
            })
            console.log(comentarioAGuardar)
/*             comentarioAGuardar.comentarios.push();
            await comentarioAGuardar.save(); */

/*             const update = { $push: { comentarios: [{idUser: idUser, comentario: comentario}] } }
            const itinerarioAGuardar = new Itinerary(update)
            await itinerarioAGuardar.save() */
/*             console.log(comentarioAGuardar)
            *//* await comentarioAGuardar.save();
            const comentarios = await Itinerary.find()  */
            respuesta = comentarioAGuardar
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


module.exports = commentControllers