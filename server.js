//TODO: Add image connection


// Get the packages we need
let express = require('express'),
    router = express.Router(),
    // mongoose = require('mongoose'),
    // secrets = require('./config/secrets'),
    bodyParser = require('body-parser');

// Create our Express application
let app = express();

// Use environment defined port or 3000
let port = process.env.PORT || 3000;

// Connect to a MongoDB
//mongoose.connect(secrets.mongo_connection, { useMongoClient: true});
// let char_conn = mongoose.createConnection(secrets.mongo_connection, { useMongoClient: true});


// Allow CORS so that backend and frontend could be put on different servers
let allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
};
app.use(allowCrossDomain);

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 800000
}));
app.use(bodyParser.json({
    limit: '50mb',
    extended: true
}));

// Use routes as a module (see index.js)
require('./routes')(app, router);


// Start the server
app.listen(port);
console.log('Server running on port ' + port);
