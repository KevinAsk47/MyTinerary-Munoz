const City = require('../models/City')

const cityControllers = {

    todasLasCiudades: async (req, res) => {
        const ciudades = await City.find()
        res.json({success: true, respuesta: ciudades})
    },

    agregarCiudad: async (req,res) => {

        const {pais,titulo,descripcion,imagen,bandera} = req.body

        const ciudadGuardada = new City({
            pais: pais,
            titulo: titulo,
            descripcion: descripcion,
            imagen: imagen,
            bandera: bandera

        })
        await ciudadGuardada.save()
        const ciudades = await City.find()
        res.json({success: true, respuesta: ciudades})     
    },

    ciudadIndividual: async (req, res) => {

        const id = req.params.id

        const ciudades = await City.findById(id)

        await res.json({success: true, respuesta: ciudades})  
    },

    borrarCiudad: async (req, res) => {
        const id = req.params.id

        try {
            await City.findOneAndDelete({_id: id})
            const ciudades = await City.find()
            res.json({success: true, respuesta: ciudades}) 
        } catch(error) {
            res.json({success: false, respuesta: 'Ha ocurrido un error'})
        }
    },

    actualizarCiudad: async (req, res) => {
        const id = req.params.id
        await City.findOneAndUpdate({_id: id}, {...req.body}, {new: true})
        const ciudades = await City.find()
        res.json({success: true, respuesta: ciudades})
    }
    
}

module.exports = cityControllers