// Load required packages
let mongoose = require('mongoose');
let charDatabase = require('../connections/char_connection');
let charConn = charDatabase.charConn;

// Definition of a character schema
// let CharacterSchema = new mongoose.Schema({
//     id: Number, //To avoid all the encoding troubles
//     name: String,
//     inks: {
//         type: [Number],
//         default: [1,2,3]
//     } // 3*number of points in the character
// });

let CharacterModel = charConn.model('Character', new mongoose.Schema({
    id: Number, //To avoid all the encoding troubles
    name: String,
    inks: {
        type: [Number],
        default: [1,2,3]
    } // 3*number of points in the character
}));

// Export the Mongoose model
// module.exports = mongoose.model('Character', CharacterSchema);
module.exports = CharacterModel;
