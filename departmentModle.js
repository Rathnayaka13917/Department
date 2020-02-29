const mongooes = require('mongoose');
const staffModel = mongooes.Schema({

  departmentId: {
        type: String,
        required: true
    },

    departmentNo: {
        type: String,
        required: true
    },


});

module.exports = mongooes.model('department', departmentModel);