// index.js (backend server)
import express from "express";
import bodyParser from "body-parser";
import pkg from "pg";

const { Pool } = pkg;
const app = express();
app.use(bodyParser.json());

// Connect to PostgreSQL
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "software_app_sample",
  password: "yourpassword",
  port: 5432,
});

// Login endpoint
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE username=$1 AND password=$2",
      [username, password]
    );
    if (result.rows.length > 0) {
      res.json({ success: true, user: result.rows[0] });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Signup endpoint
app.post("/signup", async (req, res) => {
  const { username, password, email } = req.body;
  try {
    await pool.query(
      "INSERT INTO users (username, password, email) VALUES ($1, $2, $3)",
      [username, password, email]
    );
    res.json({ success: true, message: "User registered" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Signup failed" });
  }
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});