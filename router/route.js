const express = require('express')
const router = express.Router()
const client = require('../database/db')

router
.route('')
.post(async (req, res) => {
    try {
        const { name, email, country } = req.body

        const addUser = await client.query(
            `INSERT INTO users (name, email, country) values ($1, $2, $3) RETURNING *`, 
            [name, email, country])
            return res.send({message: 'New user added', data: addUser.rows[0]})
    } catch (error) {
        console.log(error.message)
    }
})

.get(async (req, res) => {
    try {
        const getUsers = await client.query(`SELECT * FROM users`)
        return res.send({mesage: 'Successful', data: getUsers.rows})
    } catch (error) {
        console.log(error.message)
    }
})

router
.route('/:id')
.put(async (req, res) => {
    try {
        const { id } = req.params
        const { name, email, country } = req.body
        const updatedUser = await client.query(`UPDATE users SET name = $1, email = $2, country = $3 WHERE id = $4`,
        [name, email, country, id])
        return res.send({message: 'successful', data: updatedUser})
    } catch (error) {
        console.log(error.message)
    }
})
.delete(async (req, res) => {
    try {
        const { id } = req.params
        await client.query(`DELETE FROM users WHERE id = $1`, [id])
        return res.send({message: 'User was deleted successfully'})
    } catch (error) {
        console.log(error.message)
    }
})

module.exports = router

