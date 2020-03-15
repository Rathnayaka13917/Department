const mongooes = require('mongoose');
const vehicalModle = mongooes.Schema({

//this is the attributes

    vehicalType : {
        typpe : String,
        require : true
    },

    vehicalCount : {
        typpe : String,
        require : true
    },



});

module.exports = mongooes.model('vehical' , vehicalModle);