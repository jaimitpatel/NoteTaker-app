const router = require('express').Router();
const notes = require("./db/db.json");
const data = require('./db/save');



router.get('/notes', (req, res) => {
    data
    .getNote()
    .then(notes => 
    res.json(notes))
    .catch(err => res.status(500).json(err));

});

router.post('notes', (req, res) => {
    data
    .postNote(req.body)
    .then((note) => 
    res.json(note))
    .catch(err => res.status(500).json(err));
});

//BONUS Delete request;

router.delete('notes/:id', (req, res) => {
    data
    .deleteNote(req.params.id)
    .then(() =>
     res.json( { ok:true }))
    .catch(err => res.status(500).json(err));
});

module.exports = router;

