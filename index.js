const express = require('express')
const app = express()
const router = require('./router/route')
const client = require('./database/db')
const bodyParser = require('body-parser')



const port = process.env.PORT || 5000


client.connect()

app.use(bodyParser.json())

app.use('/user', router)

app.get('/', (req, res) => {
    res.send('This is Zuri server')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

