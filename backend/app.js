const express = require('express');
const mysql = require('mysql2');
var cors = require('cors');
require('dotenv').config();
const app = express();
const port = 3001;
app.use(cors());

const corsOptions = {
  origin: 'http://localhost:3000',
};

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get('/', (req, res) => {
  res.send('route simple pour test, bonjour à celui qui verra celle-ci :p');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
