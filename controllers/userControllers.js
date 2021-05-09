const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userControllers = {
    registrarUsuario: async (req, res) => {
        var { nombre, apellido, usuario, mail, contraseña, imagen, pais ,ingresoGoogle} = req.body

        const mailExiste = await User.findOne({ mail })
        const usuarioExiste = await User.findOne({ usuario })

        var respuesta;
        var error;
        var usuarioGrabado;

        clave = bcryptjs.hashSync(contraseña, 10)

        if (!mailExiste && !usuarioExiste) {
            try {
                usuarioGrabado = new User({ nombre, apellido, usuario, mail, contraseña: clave, imagen, pais ,ingresoGoogle})
                await usuarioGrabado.save()
                const token = jwt.sign({...usuarioGrabado}, process.env.SECRET_OR_KEY)
                respuesta = token 
            } catch {
                error = "Error entering your details, please try again"
            }
        } else {
            (!mailExiste && usuarioExiste) ? error = `The user ${usuario} is already in use.` : error = `Email ${mail} is already in use`
        }
        
        res.json({
            success: !error ? true : false,
            respuesta: !error && {token: respuesta, imagen: usuarioGrabado.imagen, usuario: usuarioGrabado.usuario, mail: usuarioGrabado.mail},
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
                const token = jwt.sign({...usuarioExiste}, process.env.SECRET_OR_KEY)
                respuesta = token
            } else {
                error = "Incorrect username and / or password"
            }
        } else {
            error = "Incorrect username and / or password"
        }

        res.json({
            success: !error ? true : false,
            respuesta: !error && {token: respuesta, imagen: usuarioExiste.imagen, usuario: usuarioExiste.usuario, ingresoGoogle: usuarioExiste.ingresoGoogle, mail: usuarioExiste.mail},
            error: error
        })
    },

    loginForzado: (req, res) => {
        res.json({success: true, respuesta: {imagen: req.user.imagen, usuario: req.user.usuario, mail: req.user.mail}})
    }
}


module.exports = userControllers