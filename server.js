const path = require('path');
const open = require('open');
const express = require('express');

const app = express();
const CONFIG = require('./localcfg.json');
const PORT = CONFIG.LOCAL_PORT;



app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(3000, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`Listening on port ${PORT}`);
  open(`http://localhost${PORT}`);
})