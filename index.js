const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const db = require('./database');

const musicsRouter = require('./routes/musics');

app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/musics', musicsRouter);

app.listen(8001, () => {
    console.log('Listening on 8001');
});