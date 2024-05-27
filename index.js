const express = require('express');
const cors = require('cors');
const fs = require('fs'); // Для чтения файла

const app = express();
app.use(cors());  

// Обработка запроса к GeoJSON
app.get('/api/moskva', (req, res) => {
  fs.readFile('moskva.geojson', 'utf8', (err, data) => {
    if (err) {
      console.error('Ошибка чтения файла:', err);
      res.status(500).send('Ошибка сервера');
      return;
    }
    res.json(JSON.parse(data));
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
