
const express = require('express');
const app = express();

app.use(express.static('./movie-music-app'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'movie-music-app>/'}
  );
  });

  app.listen(process.env.PORT || 8080);