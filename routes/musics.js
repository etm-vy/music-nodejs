const express = require('express');
let music = require('../models/music');
const router = express.Router();
MusicSchema = require('../models/music')

function HandleError(response, reason, message, code){
    console.log('ERROR: ', reason);
    response.status(code || 500).json({"error": message});
}

/*
router.get('/', (request, response) => {
    MusicSchema.find().exec((error, musics) => {
        if(error){
            HandleError(response, "error retrieving data", "get failed", 500);
        } else{
            response.send(musics);
        }
    });
});
*/

router.get('/', (request, response) => {
    MusicSchema.find().then((musics) => {
        response.send(musics);
    }).catch((error) => {
        HandleError(response, "error retrieving data", "get failed", 500);
    });
});

/*
router.post('/', (request, response) => {
    const musicJSON = request.body;
    if (!musicJSON.name || !musicJSON.genre){
        HandleError(response, "missing information", "post data missing", 500);
    }else {
        music = new MusicSchema({
            name: musicJSON.music,
            genre: musicJSON.genre,
            price: musicJSON.price
        });
        music.save((error)=> {
            if (error){
                response.send({"error": error});
            } else{
                response.send({"id": music.id});
            }
        });
    }
});
*/

router.post('/', (request, response) => {
    const musicJSON = request.body;
    if (!musicJSON.name || !musicJSON.genre){
        HandleError(response, "missing information", "post data missing", 500);
    }else{
        music = new MusicSchema({
            name: musicJSON.music,
            genre: musicJSON.genre,
            price: musicJSON.price
        });
        music.save().then((MusicSchema) => {
            response.send({"id": music.id});
        }).catch((error) => {
            response.send({"error": error});
        });
    }
});

module.exports = router;