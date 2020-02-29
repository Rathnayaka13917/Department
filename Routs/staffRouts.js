const staffRouts = require('express').Router();
const staffModle = require('../models/staffModel');

staffRouts.get('/', (req, res) => {
    res.send('welcome to department');
});

staffRouts.post('/', async (req, res) => {
    const member = staffModle({
        staffId: req.body.staffId,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });

    try {
        const newMember = await member.save();
        res.send(newMember);
    } catch (err) {
        console.log(err.message);
    }
});

staffRouts.get('/all', async (req, res) => {

    try {
        const allMembers = await staffModle.find();
        res.send(allMembers);

    } catch (err) {
        res.send(err.message);
    }
});

staffRouts.get('/:staffId', async (req, res) => {
    try {
        const specMember = await staffModle.findById(req.params.staffId);
        res.send(specMember);
    } catch (err) {
        res.send(err.message);

    }
});

staffRouts.delete('/:staffId', async (req, res) => {
    try{
        const delMember = await staffModle.findByIdAndRemove(req.params.staffId);
        res.send(delMember);

    }catch (err) {
        res.send(err.message);
    }
});

staffRouts.patch('/:staffId', async (req, res) => {
    try{
        const updateMember = await staffModle.findOneAndUpdate(
            {_id:req.params.staffId},
            {$set:{firstName:req.body.firstName}}

        );
        res.send(updateMember);
    

    }catch (err) {
        res.send(err.message);
    }
})

module.exports = staffRouts;