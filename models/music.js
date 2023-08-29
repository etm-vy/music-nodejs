const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MusicSchema = new Schema({
    name: String,
    genre: String,
    price: Number
});

module.exports = mongoose.model('Music', MusicSchema);

