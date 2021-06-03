const express = require('express')
const app = express()
const router = require('./router/route')
const client = require('./database/db')
const bodyParser = require('body-parser')



const port = process.env.PORT || 5000


client.connect()

app.use(bodyParser.json())

app.use('/user', router)

app.get('/', async (req, res) => {
    try {
        const getUsers = await client.query(`SELECT * FROM users`)
        return res.send({mesage: 'Successful', data: getUsers.rows})
    } catch (error) {
        console.log(error.message)
    }
    
})


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

