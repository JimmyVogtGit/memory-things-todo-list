const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('route simple pour test, bonjour à celui qui verra celle-ci :p');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
