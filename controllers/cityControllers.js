const City = require('../models/City')

const cityControllers = {

    todasLasCiudades: async (req, res) => {
        const ciudades = await City.find()
        res.json({success: true, respuesta: ciudades})
    },

    agregarCiudad: async (req,res) => {

        const {pais,titulo,descripcion,imagen} = req.body

        const ciudadGuardada = new City({
            pais: pais,
            titulo: titulo,
            descripcion: descripcion,
            imagen: imagen

        })
        await ciudadGuardada.save()
        const ciudades = await City.find()
        res.json({success: true, respuesta: ciudades})     
    }
}

module.exports = cityControllers