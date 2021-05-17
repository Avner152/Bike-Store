const mongoose = require('mongoose')

const bikeSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: [true, "ID is needed."]
    },
    manufacturer: {
        type: String,
        required: [true, "manufacturer is required"]
    },
    model: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: [true, "name is required"]
    },
    year: {
        type: Number,
        required: [true, "name is required"]
    },
    tank: {
        type: Number,
        required: [true, "name is required"],
        default: 0
    },
    img: {
        type: String,
        required: false,
        default: "../asstes/noimage.jpg"
    }
});

module.exports = mongoose.model('Bike', bikeSchema);