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
router.get("/routes/notes.js", (req, res) => {
  try {
    const notes = readDbFile();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: "failed to read n