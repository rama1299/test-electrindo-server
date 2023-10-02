const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const router = require('./routes/index')

const app = express()
const port = 8000

app.use(cors())
app.use(bodyParser.json())


app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('tiny'))

app.use(router)

app.listen(port, ()=> {
    console.log(`running on port ${port}`)
})