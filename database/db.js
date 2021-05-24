const { Client } = require('pg')

const client = new Client(
    {
        user: "postgres",
        host: "localhost",
        database: "zuri-user",
        password: "ternafanen18",
        port: 5432
    }
)

client.connect()

module.exports = client

