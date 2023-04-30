const moment = require('moment');
const express = require('express');
const mysql = require('mysql');
const router = express.Router();

const db = mysql.createConnection({
  host: '127.0.0.2',
  user: 'root',
  password: 'mysql17@',
  database: 'iseus',
});

router.route('/predavanja').get((req, res) => {
  const q = 'SELECT * FROM lecture';
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    else {
      for (const date in data) {
        data[date].date = moment(data[date].date).format('DD.MM.YYYY');
      }
      res.json(data);
    }
  });
});

module.exports = router;
