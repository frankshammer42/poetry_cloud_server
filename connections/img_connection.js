let mongoose = require('mongoose'),
    secrets = require('../config/secrets_char');

let char_conn = mongoose.createConnection(secrets.mongo_connection, { useMongoClient: true});
module.exports = {
    charConn : char_conn
};
