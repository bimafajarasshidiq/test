const express = require('express');
const bodyParser = require('body-parser');
const app = express();


//Pengaplikasian Parse/JSon
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//panggil routes
var routes = require('./routes');
routes(app);


app.listen(3000, () => {
    console.log('Server Started on port');
});

