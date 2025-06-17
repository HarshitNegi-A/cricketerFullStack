const db = require("../db");

exports.createTable = (req, res) => {
  const sql = `CREATE TABLE IF NOT EXISTS players (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    dob VARCHAR(255),
    photoUrl TEXT,
    birthplace VARCHAR(255),
    career TEXT,
    matches INT,
    score INT,
    fifties INT,
    centuries INT,
    wickets INT,
    average FLOAT
  )`;

  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).send("Failed to create table");
    } else {
      res.send("Table created");
    }
  });
};

exports.addPlayer = (req, res) => {
  const data = req.body;
  const sql = `INSERT INTO players 
    (name, dob, photoUrl, birthplace, career, matches, score, fifties, centuries, wickets, average)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    data.name, data.dob, data.photoUrl, data.birthplace, data.career,
    data.matches, data.score, data.fifties, data.centuries, data.wickets, data.average
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).send("Failed to add player");
    } else {
      res.send("Player added successfully");
    }
  });
};

exports.searchPlayer = (req, res) => {
  const { name } = req.query;
  const sql = `SELECT * FROM players WHERE name LIKE ?`;

  db.query(sql, [`%${name}%`], (err, results) => {
    if (err) {
      res.status(500).send("Search failed");
    } else {
      res.json(results[0]);
    }
  });
};
