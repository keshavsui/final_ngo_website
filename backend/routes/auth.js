const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../db");

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  const hashed = bcrypt.hashSync(password, 10);
  db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, hashed], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send("Registered successfully");
  });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  db.query("SELECT * FROM users WHERE username = ?", [username], (err, results) => {
    if (err || results.length === 0) return res.status(401).send("User not found");
    const user = results[0];
    if (!bcrypt.compareSync(password, user.password)) return res.status(401).send("Wrong password");

    const token = jwt.sign({ id: user.id }, "secret123");
    res.json({ token });
  });
});

module.exports = router;
