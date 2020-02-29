const mongooes = require('mongoose')
const staffModel = mongooes.Schema({


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