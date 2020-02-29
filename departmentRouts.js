const departmentRouts = require('express').Router();
const departmentModle = require('../models/departmentModel');



departmentRouts.post('/', async (req, res) => {
    const dip = departmentModle({
        departmentId: req.body.departmentId
      
    });

    try {
        const newdip = await dip.save();
        res.send(newdip);
    } catch (err) {
        console.log(err.message);
    }
});

departmentRouts.get('/all', async (req, res) => {

    try {
        const alldip= await departmentModle.find();
        res.send(alldip);

    } catch (err) {
        res.send(err.message);
    }
});

departmentRouts.get('/:departmentId', async (req, res) => {
    try {
        const specdip = await departmentModle.findById(req.params.departmentId);
        res.send(specdip);
    } catch (err) {
        res.send(err.message);

    }
});

departmentRouts.delete('/:departmentId', async (req, res) => {
    try{
        const deldip = await departmentModle.findByIdAndRemove(req.params.departmentId);
        res.send(deldip);

    }catch (err) {
        res.send(err.message);
    }
});

departmentRouts.patch('/:departmentId', async (req, res) => {
    try{
        const updatedip = await departmentModle.findOneAndUpdate(
            {_id:req.params.staffId},
            {$set:{departmentId:req.body.departmentId}}

        );
        res.send(updatedip);
    

    }catch (err) {
        res.send(err.message);
    }
})

module.exports = staffRouts;