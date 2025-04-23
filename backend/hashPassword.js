// hashPassword.js
const bcrypt = require("bcryptjs");

const password = "admin123"; // Replace with your actual admin password
const hashed = bcrypt.hashSync(password, 10);

console.log("Hashed password:", hashed);


