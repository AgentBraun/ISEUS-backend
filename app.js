import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import moment from 'moment';

const app = express();
const dateSet = moment();

const db = mysql.createConnection({
  host: '127.0.0.2',
  user: 'root',
  password: 'mysql17@',
  database: 'iseus',
});

app.use(express.json());
app.use(cors());

app.get('/', (req, res, next) => {
  res.json('Hello, this is the ISEUS backend');
});

app.get('/profesori/predavanja', (req, res) => {
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

app.listen(8800, () => {
  console.log('Database Online!');
});
