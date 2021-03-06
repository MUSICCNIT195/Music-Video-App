
const express = require('express');
const app = express();

app.use(express.static('./dist/movie-music-app'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/movie-music-app.json>/'}
  );
  });

  app.listen(process.env.PORT || 8080);