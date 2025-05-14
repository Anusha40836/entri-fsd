const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/auth");

router.get("/getNotes", verifyToken, (req, res) => {
  res.json({ message: "These are your notes", user: req.user });
});

module.exports = router;
