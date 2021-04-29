const User = require('../models/User')
const bcryptjs = require('bcryptjs')

const userControllers = {
    registrarUsuario: async (req, res) => {
        var { nombre, apellido, usuario, mail, contraseña, imagen, pais} = req.body

        const mailExiste = await User.findOne({ mail })
        const usuarioExiste = await User.findOne({ usuario })

        var respuesta;
        var error;

        clave = bcryptjs.hashSync(contraseña, 10)

        if (!mailExiste && !usuarioExiste) {
            try {
                const usuarioGrabado = new User({ nombre, apellido, usuario, mail, contraseña: clave, imagen, pais})
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
        const { mail, contraseña } = req.body
        var respuesta;
        var error;

        const usuarioExiste = await User.findOne({ mail: mail })
        if (usuarioExiste) {
            const claveEsIgual = bcryptjs.compareSync(contraseña, usuarioExiste.contraseña)
            if (claveEsIgual) {
                respuesta = usuarioExiste
            } else {
                error = "Usuario y/o contraseña incorrectos"
            }
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