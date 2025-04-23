const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/submit", (req, res) => {
  const { user_id, name, email, date, time, message } = req.body;
  const sql = "INSERT INTO volunteer_requests (user_id, name, email, date, time, message) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(sql, [user_id, name, email, date, time, message], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send("Volunteer request submitted");
  });
});

module.exports = router;
