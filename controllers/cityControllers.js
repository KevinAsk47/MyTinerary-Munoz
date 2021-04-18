const City = require('../models/City')

const cityControllers = {

    todasLasCiudades: async (req, res) => {
        try {
            const ciudades = await City.find()
            res.json({success: true, respuesta: ciudades})
        } catch(error) {
            res.json({success: false, respuesta: 'An unexpected error has occurred with our servers'})
        }
    },

    agregarCiudad: async (req,res) => {

        const {pais,titulo,descripcion,imagen,bandera} = req.body 

        try {

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

        } catch(error) {
            res.json({success: false, respuesta: 'An unexpected error has occurred with our servers'})
        }
    },

    ciudadIndividual: async (req, res) => {

        const id = req.params.id 

        try {        
            const ciudad = await City.findById(id)
            await res.json({success: true, respuesta: ciudad}) 

        } catch(error) {
            res.json({success: false, respuesta: 'An unexpected error has occurred with our servers'})
        }
    },

    borrarCiudad: async (req, res) => {
        const id = req.params.id

        try {
            await City.findOneAndDelete({_id: id})
            const ciudades = await City.find()
            res.json({success: true, respuesta: ciudades}) 
        } catch(error) {
            res.json({success: false, respuesta: 'An unexpected error has occurred with our servers'})
        }
    },

    actualizarCiudad: async (req, res) => {

        const id = req.params.id

        try {

            await City.findOneAndUpdate({_id: id}, {...req.body}, {new: true})
            const ciudades = await City.find()
            res.json({success: true, respuesta: ciudades})

        } catch(error) {
            res.json({success: false, respuesta: 'An unexpected error has occurred with our servers'})
        }
    }   
}

module.exports = cityControllers