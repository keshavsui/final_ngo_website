const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "667700", // use your MySQL password if set
  database: "ngo_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected");
});

module.exports = connection;
