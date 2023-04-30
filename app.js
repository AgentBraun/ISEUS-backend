const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
//import professorRoutes from './routes/lecturesRoutes';

const app = express();

const db = mysql.createConnection({
  host: '127.0.0.2',
  user: 'root',
  password: 'mysql17@',
  database: 'iseus',
});

app.use(express.json());
app.use(cors());

app.use('/profesori', require('./routes/lecturesRoutes'));

app.get('/', (req, res, next) => {
  res.json('Hello, this is the ISEUS backend');
});

app.listen(8800, () => {
  console.log('Database Online!');
});
