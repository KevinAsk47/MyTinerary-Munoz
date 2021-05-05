const Activity = require('../models/Activity')

const activityControllers = {
    cargarActividad: async (req,res) => {
        var respuesta;
        var error;

        try {
            const actividadAGuardar = new Activity(req.body)
            await actividadAGuardar.save()
            const actividades = await Activity.find()
            respuesta = actividades
        } catch(error) {
            error = 'An unexpected error has occurred with our servers'
        }

        res.json({
            success: !error ? true : false,
            respuesta: !error && respuesta,
            error: error
        })
    },

    actividadesPorItinerario: async (req,res) => {
        const id = req.params.id

        var respuesta;
        var error;

        try {        
            const actividades = await Activity.find({idItinerary : id})
            respuesta = await actividades
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


module.exports = activityControllers