require('dotenv').config()
const passport = require('passport')
const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
require('./config/dataBase')
require('./config/passport')
const path = require('path')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', router)

if(process.env.NODE_ENV === 'production'){
    console.log("estoy aca")
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname+"/client/build/index.html"))
    })
}

const port = process.env.PORT
const host = process.env.HOST || '0.0.0.0'

app.listen(port, host, () => console.log("App listening on port " + port + " on " + host))