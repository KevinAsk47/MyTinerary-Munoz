const joi = require('joi')

const validador = (req, res, next) => {
    const schema = joi.object({
        nombre: joi.string().trim().min(2).max(20).required().pattern(new RegExp('[a-zA-Z]$')).messages({
            'string.min': 'You first name must have at least 3 letters',
            'string.empty': 'Your first name is a required field',
            'string.pattern.base': 'The input first name only supports letters'
        }),
        apellido: joi.string().trim().min(2).max(20).required().pattern(new RegExp('[a-zA-Z]$')).messages({
            'string.min': 'You last name must have at least 3 letters',
            'string.max': 'Your username can only contain up to 20 characters',
            'string.empty': 'Your last name is a required field',
            'string.pattern.base': 'The input first name only supports letters'
        }),
        usuario: joi.string().trim().min(3).max(8).required().messages({
            'string.min': 'Your usuario must contain at least 3 characters',
            'string.empty': 'Your ususario is a required field',
            'string.max': 'Your username can only contain up to 8 characters'
        }),
        mail: joi.string().required().trim().email().messages({
            'string.empty': 'Your mail address is a required field',
        }),
        contraseña: joi.string().min(5).trim().required().pattern(new RegExp('[a-zA-Z0-9]$')).messages({
            'string.min': 'Your passwrod must contain at least 6 characters',
            'string.empty': 'Your password is a required field',
            'string.pattern.base': 'Your password must contain a letter and a number'
        }),
        imagen: joi.string().required().trim().uri().messages({
            'string.uri': 'este URL no es valido',
            'string.empty': 'You should use a valid URL',
        }),
        pais: joi.string().required().trim().messages({
            'string.empty': 'Please, choose a country',
        }),
        ingresoGoogle: joi.boolean()
    })
    const validation = schema.validate(req.body, {abortEarly: false})
    
    if (validation.error) {
        return res.json({success: false, errores: validation.error})
    }
    next()
}

module.exports = validador