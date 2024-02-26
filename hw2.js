const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.send('HTTPS Web Service is Alive');
});

const sslServer = https.createServer(
  {
    key: fs.readFileSync('C:/Users/12243/key.pem'),
    cert: fs.readFileSync('C:/Users/12243/cert.pem'),
  },
  app
);

sslServer.listen(8080, () => console.log('Secure server on port 8080'));
