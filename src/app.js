const express = require('express')
const path = require('path')
const publicDirectory = path.join(__dirname, '../public')
const app = express()

const { getActiveRooms } = require('./utils/user')
app.use(express.static(publicDirectory))
app.use(express.json())

app.get('/getRooms', (req, res) => {
    console.log('Hello');
    res.send({ rooms: getActiveRooms() })
})

module.exports = app