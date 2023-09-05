const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1/musics';

mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true});
const db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to database');
});

db.on('error', (error) => {
    console.error('Connection error: ', error);
});

module.exports = db; 
