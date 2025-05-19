const express = require("express");
const router = express.Router();

let items = [
  { id: 1, name: "Item One" },
  { id: 2, name: "Item Two" },
];

// Helper: Validate ID is a number
const isValidId = (id) => !isNaN(parseInt(id));

// GET all items (200)
router.get("/", (req, res) => {
  res.status(200).json(items);
});

// POST a new item (201 or 400)
router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }
  const newItem = { id: Date.now(), name };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT - full update (200 or 404 or 400)
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!isValidId(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  const index = items.findIndex((item) => item.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ message: "Item not found" });
  }

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  items[index] = { id: parseInt(id), name };
  res.status(200).json(items[index]);
});

// PATCH - partial update (200, 400, 404)
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!isValidId(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  const item = items.find((item) => item.id === parseInt(id));
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  item.name = name;
  res.status(200).json(item);
});

// DELETE - (200, 404, 400)
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  if (!isValidId(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  const originalLength = items.length;
  items = items.filter((item) => item.id !== parseInt(id));

  if (items.length === originalLength) {
    return res.status(404).json({ message: "Item not found" });
  }

  res.status(200).json({ message: "Item deleted" });
});

module.exports = router;
