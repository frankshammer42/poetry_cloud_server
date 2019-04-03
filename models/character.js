// Load required packages
var mongoose = require('mongoose');

// Definition of a character schema
var CharacterSchema = new mongoose.Schema({
    id: Number, //To avoid all the encoding troubles
    name: String,
    inks: {
        type: [Number],
        default: [1,2,3]
    } // 3*number of points in the character
});

// Export the Mongoose model
module.exports = mongoose.model('Character', CharacterSchema);
