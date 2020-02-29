const mongooes = require('mongoose');
const staffModel = mongooes.Schema({

    staffId: {
        type: String,
        required: true
    },

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

});

module.exports = mongooes.model('staff', staffModel);