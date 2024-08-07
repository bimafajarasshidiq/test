'use strict';

const { app } = require('./server');

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
    .get(jsonku.index);
};
routes(app);
