const vehicalRaouts = require('express').Router();
const vehicalModle = require('../models/vehicalModle');


//this is the post command

vehicalRaouts.post('/', async (req, res) => {

    const vehical = vehicalModle({
        vehicalNo: req.body.vehicalNo,
        vehicalCount: req.body.vehicalCount
    });

    try {
        const newVehical = await vehical.save();
        res.send(newVehical);
    } catch (err) {
        console.log(err.message);
    }
});

//this is the get all commond
 

vehicalRaouts.get('/all', async (req, res) => {

    try {
        const allVehical = await vehicalModle.find();
        res.send(allVehical);

    } catch (err) {
        res.send(err.message);
    }

});

//this is the specific vehical choice command

vehicalRaouts.get('/:vehicalNo', async (req, res) => {
    try {
        const specVehical = await vehicalModle.findById(req.params, vehicalNo);
        res.send(specVehical);
    } catch (err) {
        res.send(err.message);
    }
});

//this is the delete commond

vehicalRaouts.delete('/:vehicalId', async (req, res) => {

    try {
        const delVehical = await vehicalModle.findByIdAndRemove(req.params, vehicalNo);
        res.send(delVehical);

    } catch (err) {
        res.send(err.message);
    }
});

module.exports = vehicalRaouts;