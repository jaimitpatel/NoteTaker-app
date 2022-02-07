const router = require('express').Router();
const notes = require("../db/db");
const fs = require('fs');
const uuid = require('uuid')
const path = require('path')

router.get('/notes', (req, res) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data)
        res.json(notes);
    })
})

router.post('/notes', (req, res) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data)
        const newNote = req.body
        newNote.id = uuid.v4()
        notes.push(newNote)

        const createNote = JSON.stringify(notes)
        fs.writeFile(path.join(__dirname, '../db/db.json'), createNote, (err) => {
            if (err) throw err
        })
        res.json(newNote)
        return console.log(`Added a new note: ${newNote.id}`)

    })
})

router.delete('/notes/:id', (req, res) => {
    const noteId= req.params.id
    fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
        if (err) throw err
        const notes = JSON.parse(data)
        notes.forEach(function(updatedNote, i) {
            if (updatedNote.id.toString() === noteId) {
                notes.splice (i, 1)
            }
        })
            fs.writeFile('./db/db.json', JSON.stringify(notes), err => {
                if (err) throw err;
                console.log (`deleted selected note: ${noteId}`)

            })
    })
    res.send('file')
});

module.exports = router;

