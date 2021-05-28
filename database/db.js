const { Client } = require('pg')
const dotenv = require('dotenv')

dotenv.config()

const client = new Client(
    {
        user: process.env.DATABASE_USER,
        host: "localhost",
        database: process.env.DATABASE_NAME,
        password: process.env.DATABASE_PASSWORD,
        port: 5432
    }
)



client.on('connect', () => console.log('Datebase connected!'))

client.on('error', (err) => console.log(`Something went wrong ${err}`))

module.exports = client

