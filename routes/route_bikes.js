const express = require('express')
const router = express.Router()
const Bike = require('../model/model_bike')
    // Bike.collection.deleteMany() // DELETES ALL FROM MONGODB

// ## Get all Info
router.get('/', async(req, res) => {
    try {
        const my_bike = await Bike.find();
        res.json(my_bike)
    } catch (error) {
        res.send('Error: ' + error)
    }
});

// ## Get Specific Meal By ID
router.get('/:id', async(req, res) => {
    try {
        const my_bike = await Bike.findById(req.params.id);
        res.json(my_bike)
    } catch (error) {
        res.send('Error: ' + error)
    }
});

// ## Create new bikes
router.post('/', async(req, res) => {
    const bike = new Bike({
        _id: req.body._id,
        manufacturer: req.body.manufacturer,
        model: req.body.model,
        price: req.body.price,
        year: req.body.year,
        tank: req.body.tank,
        img: req.body.img
    })
    try {
        console.log(res.body)
        const b1 = await bike.save()
        res.json(b1)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})


router.get('/bikes/', async(req, res) => {
    try {
        console.log(res)
    } catch (error) {
        res.send('Error: ' + error)
    }
});

// create pricing html
router.post('/bikes/', async(req, res) => {

    try {
        console.log(res.body)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

// ## Update Specific Meal name (By ID)
router.patch('/:id', async(req, res) => {
    try {
        const bike = await Bike.findById(req.params.id)
        bike.img = req.body.img;
        const b1 = await bike.save()
        res.json(b1)

    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

module.exports = router