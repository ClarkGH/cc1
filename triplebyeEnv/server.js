const express = require('express'),
  app = express(),
  path = require('path');

app.use(express.static('.'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080, () => {
  console.log('ClarkBook is now listening on port 8080!');
});
