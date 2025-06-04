const express = require("express");
const Note = require("../models/Note");
const auth = require("../middleware/auth");
const router = express.Router();

// Get all notes for user
router.get("/", auth, async (req, res) => {
  const notes = await Note.find({ user: req.user.id });
  res.json(notes);
});

// Create note
router.post("/", auth, async (req, res) => {
  const note = await Note.create({
    user: req.user.id,
    title: req.body.title,
    content: req.body.content,
  });
  res.status(201).json(note);
});

// Update note
router.put("/:id", auth, async (req, res) => {
  const note = await Note.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    { title: req.body.title, content: req.body.content },
    { new: true }
  );
  if (!note) return res.status(404).json({ message: "Note not found" });
  res.json(note);
});

// Delete note
router.delete("/:id", auth, async (req, res) => {
  const note = await Note.findOneAndDelete({
    _id: req.params.id,
    user: req.user.id,
  });
  if (!note) return res.status(404).json({ message: "Note not found" });
  res.json({ message: "Note deleted" });
});

module.exports = router;
