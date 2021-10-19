const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

mongoose.connect(process.env.mongoURI || keys.mongoURI);

const app = express();
require('./routes/userAuthRoutes')(app);
require('./routes/upcoming')(app);
require('./routes/search')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
