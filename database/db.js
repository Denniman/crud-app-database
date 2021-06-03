const { Client } = require('pg')
const dotenv = require('dotenv')

dotenv.config()

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
});



client.on('connect', () => console.log('Datebase connected!'))

client.on('error', (err) => console.log(`Something went wrong ${err}`))

module.exports = client

