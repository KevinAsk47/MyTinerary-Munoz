const User = require('../models/User')

const userControllers = {
    registrarUsuario: async (req, res) => {
        const { nombre, apellido, usuario, mail, contraseña, imagen, pais} = req.body

        const mailExiste = await User.findOne({ mail })
        const usuarioExiste = await User.findOne({ usuario })

        var respuesta;
        var error;

        if (!mailExiste && !usuarioExiste) {
            try {
                const usuarioGrabado = new User({ nombre, apellido, usuario, mail, contraseña, imagen, pais})
                await usuarioGrabado.save()
                respuesta = usuarioGrabado
            } catch {
                error = "Error al ingresar sus datos, reintente nuevamente"
            }
        } else if (!mailExiste && usuarioExiste) {
            error = `El usuario ${usuario} ya se encuentra en uso`
        } else {
            error = `El e-mail ${mail} ya se encuentra en uso`
        }

        res.json({
            success: !error ? true : false,
            respuesta: respuesta,
            error: error
        })
    },

    loagearUsuario: async (req, res) => {
        const { mail, clave } = req.body
        var respuesta;
        var error;

        const usuarioExiste = await User.findOne({ mail: mail })
        if (usuarioExiste && usuarioExiste.clave === clave) {
            respuesta = usuarioExiste
        } else {
            error = "Usuario y/o contraseña incorrectos"
        }

        res.json({
            success: !error ? true : false,
            respuesta: respuesta,
            error: error
        })
    }
}

module.exports = userControllers