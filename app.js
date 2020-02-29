const express = require('express');
const app = express();
const bodyPasser = require('body-parser');
const mongoose = require('mongoose');
app.use(bodyPasser.json());
require('dotenv/config');

//setup mongo drivers

mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify : true}, (err) => {

    if (err) {

        console.log(err.message);
    }
    else {

        console.log('DB connected');
    }
});

//setup routs

const staffRouts = require('./Routs/staffRouts');

//use routs

app.use('/staff',staffRouts);

const PORT = 3000;

app.listen(PORT, () => {

    console.log(`server listing on ${PORT}`);
});