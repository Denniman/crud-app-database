const dbClient = require('../database/db')

dbClient.query(
    "CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(50) NOT NULL, email VARCHAR(100) NOT NULL, country VARCHAR(100) NOT NULL)"
)