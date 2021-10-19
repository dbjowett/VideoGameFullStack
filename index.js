const express = require('express');
const mongoose = require('mongoose');

require('./models/User');
require('./services/passport');

const keys = require('./config/keys');

const app = express();
mongoose.connect(keys.mongoURI);

require('./routes/userAuthRoutes')(app);
require('./routes/upcoming')(app);
require('./routes/search')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
