const clientRouts = require('express').Router();
const clientModel = require('../model/clientMOdel');

clientRouts.post('/', async(req, res) => {
  const member =clientModel({
      clientId : req.body.clientId,
      clentName : req.body.clentName
  });

  try{
      const newMember = await member.save();
      res.send(newMember);

    }catch(err){
        Console.log(err.message);
    }
});

//this is get method for all
//using get method

clientRouts.get('/all', async (req, res) => {

    try{
        const allMember = await clientModel.find();
        res.send(allMembers);

    }catch (err) {
        res.send(err.message);
    }
});

//this is get method spesific
//using get method

clientRouts.get('/:clientId', async (req, res) => {
    try{
        const specMember = await clientModel.findById(req.params.clientId);
        res.send(specMember);
    }catch (err) {
        res.send(err.message);
    }
});

//this is delete method
//using delete method

clientRouts.delete('/:clientId', async (req, res) => {
    try{
        const delMember = await clientModel.findByIdAndRemove(req.params.clientId);
        res.send(delMember);
    }catch (err) {
        res.send(err.message);
    }
});

//this is update method
//using patch method

clientRouts.patch('/:clientId', async (req, res) => {
    try{
        const updateMember = await clientModle.findOneAndUpdate(
            {_id:req.params.clientId},
            {$set:{clientName:req.body.clientName}} 

        );
        res.send(updateMember);
    

    }catch (err) {
        res.send(err.message);
    }
})

module.exports = clientRouts;