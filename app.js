const express = require('express')
const app = express()
const router = require('./router/route')
const bodyParser = require('body-parser')
require('dotenv').config()


const port = process.env.PORT || 5000

app.use(bodyParser.json())

app.use('/user', router)

app.get('/', (req, res) => {
    res.send('Zuri server')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

