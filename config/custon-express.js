var express = require('express');
var bodyParser = require('body-parser');
var consign = require('consign');
var expressLayouts = require('express-ejs-layouts');

module.exports = function (){
    var app = express();

    app.set('view engine', 'ejs')
    app.use(expressLayouts);
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.use(express.static(__dirname + '/public'));

    consign()
        .include('controllers')
        .into(app);
    return app;
}

