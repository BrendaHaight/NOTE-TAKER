const express = require("express");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();

const dbFilePath = path.join(__dirname, "../db/db.json");

const readDbFile = () => {
  const data = fs.readFileSync(dbFilePath, "utf8");
  return JSON.parse(data);
};

const writeDbFile = data => {
  fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2));
};

// GET /api/notes
router.get("/notes", (req, res) => {
  try {
    const notes = readDbFile();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: "failed to read notes"})
  }
})

// POST /api/notes
router.post('/notes', (req, res) => {
  try{
    const notes = readDbFile()
    const newNote = {id: uuidv4(), ...req.body}
    notes.push(newNote)
    writeDbFile(notes)
    res.json(newNote)
  } catch (err) {
    res.status(500).json({error: 'Failed to save note'})
  }
})

// DELETE /api/notes
router.delete('/notes/:id', (req,res)=> {
  try{
    const notes = readDbFile()
    const filteredNotes = notes.filter(note => note.id !== req.params.id)
    writeDbFile(filteredNotes)
    res.json({message: 'Note deleted sucessfully'})
  } catch (err) {
    res.status(500).json({error: 'Failed to delete note'})
  }
})

module.exports = router