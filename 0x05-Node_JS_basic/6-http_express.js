const express = require('express');

const app = express();
const PORT = 1245;

app.get('/', (_req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
