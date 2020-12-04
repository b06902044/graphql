const mongoose = require('mongoose');

//mongodb automatically create id field so we don't need to write it 
const authorSchema = new mongoose.Schema({
    name: String,
    age: Number
});

module.exports = mongoose.model('Author', authorSchema);