const mongooes = require('mongoose')
const staffModel = mongooes.Schema({

//this is the attributes

    clientId : {
        type : String,
        required : true
    },

    clientName : {
        type : String,
        required : true
    },

 
});

module.exports = mongooes.model('client' , staffModel);