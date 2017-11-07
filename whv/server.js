const express = require('express'),
  app = express();

app.use( express.static( __dirname + '/' ));

app.get( '/', ( req, res ) => res.sendFile( __dirname + '/' ));

app.listen(8080, () => console.log( 'Example app listening on port 8080!' ));