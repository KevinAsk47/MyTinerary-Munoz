const joi = require('joi')

const validador = (req, res, next) => {
    const schema = joi.object({
        nombre: joi.string().trim().min(2).max(20).required().pattern(new RegExp('[a-zA-Z]$')),
        apellido: joi.string().trim().min(2).max(20).required().pattern(new RegExp('[a-zA-Z]$')),
        usuario: joi.string().trim().min(3).max(7).required(),
        mail: joi.string().required().trim().email(),
        contraseña: joi.string().min(5).trim().required().pattern(new RegExp('[a-zA-Z0-9]$')),
        imagen: joi.string().required().trim(),
        pais: joi.string().required().trim()
    })
    const validation = schema.validate(req.body, {abortEarly: false})
    
    if (validation.error) {
        return res.json({success: false, errores: validation.error})
    }
    next()
}

module.exports = validador