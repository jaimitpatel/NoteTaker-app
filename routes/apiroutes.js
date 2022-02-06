const router = require('express').Router();
const notes = require("../db/db");
const fs = require('fs');

fs.readFile('db/db.json', 'utf8', (err, data) => {
    if (err) throw err;
const notes = JSON.parse(data)
});

router.get('/notes', (req, res) => {
   res.json(notes)

});

router.post('/notes', (req, res) => {
let newNote = req.body
notes.push(newNote)
updatedb()
return console.log('Added a new note:' +newNote.title)
});
router.get('/notes/:id', (req, res) => {
    res.json(notes[req.params.id])
})

//BONUS Delete request;

router.delete('/notes/:id', (req, res) => {
    notes.splice(req.params.id, 1)
   updatedb()
   console.log('Deleted selected note!')
});

function updatedb() {
    fs.writeFile('db/db.json', JSON.stringify(notes), err =>
    { if (err) throw err;
    return true;
    })
}

module.exports = router;

