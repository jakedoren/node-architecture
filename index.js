const express = require('express')
const app = require('./app')
const mongoose = require('mongoose')
const itemRouter = require('./src/modules/item/routes/itemRouter')
const PORT = process.env.PORT || 8080
require('dotenv').config()

app.use(express.json())
app.use('/items', itemRouter)

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ogefg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    .then(console.log('Connected to DB'))

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})