const router = require('express').Router();
const notes = require("./db/db.json");
const data = require('./db/save');



router.get('/notes', (req, res) => {
    data
    .getNote()
    .then(notes => 
    res.json(notes))
      .catch ((err: any) => {
        res.status(500).json({
            error: err
        })
    })
});

router.post('notes', (req, res) => {
    data
    .postNote(req.body)
    .then((note) => 
    res.json(note))
    .catch ((err: any) => {
        res.status(500).json({
            error: err
        })
    })
});

//BONUS Delete request;

router.delete('notes/:id' (req, res) => {
    data
    .deleteNote(req.params.id)
    .then(() =>
     res.json( { ok:true }))
        .catch ((err: any) => {
        res.status(500).json({
            error: err
        })
    })
});

module.exports = router;

