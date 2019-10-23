const express = require('express');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const app = express();
global.fetch = require('node-fetch');
require('dotenv').config();

const unsplash = new Unsplash({
  accessKey: process.env.ACCESS_KEY,
  secret: process.env.SECRET,
  callbackUrl: process.env.CALLBACK_URL
});

app.get('/api/photos', (req, res) => {
  const start = req.query.start;
  const count = req.query.count;
  console.log(start, count);

  unsplash.photos
    .listPhotos(start, count)
    .then(toJson)
    .then(json => res.json(json))
    .catch(err => {
      console.log(err);
      return res.sendStatus(500);
    });
});

// single page application
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
