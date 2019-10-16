// Module dependencies


const logger = require('morgan');
const bodyParser = require('body-parser');

module.exports = function(app){
    // Setup database here
    require('./db');


    app.use(bodyParser());
    app.use(logger('dev'));
    app.use(bodyParser.json({limit: '5mb'}));
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(function(req, res, next){
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });
}