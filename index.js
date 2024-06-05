const express = require('express');
const fs = require('fs');

const app = express();

app.get('/moskva.geojson', (req, res) => {
  const data = fs.readFileSync('moskva.geojson');
  res.json(data);
});

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});