const validador = (req, res, next) => {
    if (req.body.titulo === '') {
       return res.json({success: false, error: 'necesitas poner una ciudad'})
    } 
    next()
}

module.exports = validador