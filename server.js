require('dotenv').config()
const passport = require('passport')
const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
require('./config/dataBase')
require('./config/passport')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', router)

app.listen(4000, () => console.log("App listening on port 4000"))