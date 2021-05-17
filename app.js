const express = require('express');
const mongoose = require('mongoose')
const URL = 'mongodb://localhost/BikeDataBase'

const app = express();
mongoose.connect(URL, { useNewUrlParser: true })
const connection = mongoose.connection


connection.on('open', () => {
    console.log("Connected...");
})

// Fetch
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    // express.json()
    next();
});

// Post
app.use(express.json())

const bikeRouter = require("./routes/route_bikes")
app.use('/bikes', bikeRouter)


app.use('/bikes/pricing', bikeRouter)

app.listen(8000, () => {
    console.log("Server is listening in port 8000")
})