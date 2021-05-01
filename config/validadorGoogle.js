const joi = require('joi')

const validadorGoogle = (req, res, next) => {
    const schema = joi.object({
        mail: joi.string().required().trim().email(),
        contraseña: joi.string().min(5).trim().required().pattern(new RegExp('[a-zA-Z0-9]$')),
        ingresoGoogle: joi.boolean().invalid(false)
    })
    const validation = schema.validate(req.body, {abortEarly: false})
    
    if (validation.error) {
        return res.json({success: false, errores: validation.error})
    }
    next()
}

module.exports = validadorGoogle