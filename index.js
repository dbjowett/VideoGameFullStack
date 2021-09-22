const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>');
});

app.listen(port, (port) => `Server running on port: ${port}`);
