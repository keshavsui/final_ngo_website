import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mysql from "mysql2";

const router = express.Router();
const JWT_SECRET = "your-secret-key";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "667700",
  database: "ngo_volunteer"
});

// ✅ Admin login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find admin user
    db.query("SELECT * FROM users WHERE email = ? AND role = 'admin'", [email], async (err, results) => {
      if (err) {
        return res.status(500).json({ success: false, message: "Database error" });
      }

      if (results.length === 0) {
        return res.status(401).json({ success: false, message: "Invalid credentials" });
      }

      const admin = results[0];

      // Verify password
      const validPassword = await bcrypt.compare(password, admin.password);
      if (!validPassword) {
        return res.status(401).json({ success: false, message: "Invalid credentials" });
      }

      // Generate token
      const token = jwt.sign(
        { userId: admin.id, role: admin.role },
        JWT_SECRET,
        { expiresIn: '24h' }
      );

      res.json({
        success: true,
        message: "Login successful",
        token,
        user: {
          id: admin.id,
          name: admin.name,
          email: admin.email,
          role: admin.role
        }
      });
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ✅ Fetch volunteer requests route
router.get("/requests", (req, res) => {
  db.query("SELECT * FROM volunteer_requests", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

export default router;
