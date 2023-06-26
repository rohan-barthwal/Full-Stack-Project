const express = require('express');
const app = express();
const mongoose = require('mongoose');


//connecting database
mongoose.connect('mongodb://localhost:27017/apiTesting', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("database connected")
})
    .catch((err) => console.log(err));

module.exports = express;









