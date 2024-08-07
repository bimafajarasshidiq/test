const express = require('express');
const bodyParser = require('body-parser');
const app = express();
exports.app = app;


//Pengaplikasian Parse/JSon
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//panggil routes
app.listen(3000, () => {
    console.log('Server Started on port');
});

