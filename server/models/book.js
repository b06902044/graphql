const mongoose = require('mongoose');

//mongodb automatically create id field so we don't need to write it 
const bookSchema = new mongoose.Schema({
    name: String,
    genre: String,
    authorId: String
});

module.exports = mongoose.model('Book', bookSchema);