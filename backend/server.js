import express from "express";
import cors from "cors";
import mysql from "mysql2";
import bodyParser from "body-parser";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import adminRoutes from "./routes/admin.js";

const app = express();
const PORT = 5000;
const JWT_SECRET = "your-secret-key"; // In production, use environment variable

app.use(cors());
app.use(bodyParser.json());

// Use admin routes
app.use("/api/admin", adminRoutes);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "667700",
  database: "ngo_volunteer"
});

// Create default admin user
const createDefaultAdmin = async () => {
  const adminEmail = "admin@ngo.com";
  const adminPassword = "admin123";
  
  // Check if admin exists
  db.query("SELECT * FROM users WHERE email = ?", [adminEmail], async (err, results) => {
    if (err) {
      console.error("Error checking admin user:", err);
      return;
    }

    if (results.length === 0) {
      // Hash password
      const hashedPassword = await bcrypt.hash(adminPassword, 10);
      
      // Create admin user
      db.query(
        "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
        ["Admin", adminEmail, hashedPassword, "admin"],
        (err) => {
          if (err) {
            console.error("Error creating admin user:", err);
            return;
          }
          console.log("✅ Default admin user created");
          console.log("Admin credentials:");
          console.log("Email: admin@ngo.com");
          console.log("Password: admin123");
        }
      );
    } else {
      console.log("Admin user already exists");
    }
  });
};
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  const sql = "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)";
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error("Error saving contact message:", err);
      return res.status(500).json({ success: false, message: "Failed to save message" });
    }

    res.json({ success: true, message: "Message saved successfully!" });
  });
});


db.connect(err => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("✅ MySQL connected");
  
  // Create tables if they don't exist
  const createTables = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      role ENUM('user', 'admin') DEFAULT 'user'
    );

    CREATE TABLE IF NOT EXISTS volunteer_requests (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT,
      date DATE NOT NULL,
      time_slot VARCHAR(50) NOT NULL,
      status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `;

  db.query(createTables, (err) => {
    if (err) {
      console.error("Error creating tables:", err);
      return;
    }
    console.log("✅ Tables created if they didn't exist");
    
    // Create default admin user after tables are created
    createDefaultAdmin();
  });
});

app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
      if (err) {
        return res.status(500).json({ success: false, message: "Database error" });
      }

      if (results.length > 0) {
        return res.status(400).json({ success: false, message: "Email already registered" });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert new user
      const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
      db.query(sql, [name, email, hashedPassword], (err, result) => {
        if (err) {
          return res.status(500).json({ success: false, message: "Error registering user" });
        }
        res.json({ success: true, message: "Registration successful" });
      });
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Find user
    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
      if (err) {
        return res.status(500).json({ success: false, message: "Database error" });
      }

      if (results.length === 0) {
        return res.status(401).json({ success: false, message: "Invalid credentials" });
      }

      const user = results[0];

      // Check role
      if (role === 'admin' && user.role !== 'admin') {
        return res.status(403).json({ success: false, message: "Access denied" });
      }

      // Verify password
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ success: false, message: "Invalid credentials" });
      }

      // Generate token
      const token = jwt.sign(
        { userId: user.id, role: user.role },
        JWT_SECRET,
        { expiresIn: '24h' }
      );

      res.json({
        success: true,
        message: "Login successful",
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role
        }
      });
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ success: false, message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid token" });
  }
};

app.post("/api/volunteer", verifyToken, (req, res) => {
  const { date, time_slot } = req.body;
  const user_id = req.user.userId;

  const sql = "INSERT INTO volunteer_requests (user_id, date, time_slot) VALUES (?, ?, ?)";
  db.query(sql, [user_id, date, time_slot], (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: "Error submitting request" });
    }
    res.json({ success: true, message: "Volunteer request submitted" });
  });
});

app.get("/api/admin/volunteers", verifyToken, (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ success: false, message: "Access denied" });
  }

  const sql = `
    SELECT u.name, u.email, v.date, v.time_slot, v.status
    FROM users u 
    JOIN volunteer_requests v ON u.id = v.user_id
  `;
  
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, message: "Database error" });
    }
    res.json({ success: true, data: results });
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
