const express = require('express');

const app = express();
const PORT = 1245;

app.get('/', (_req, res) => {
  res.send('Hello ALX!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
