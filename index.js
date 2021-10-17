const express = require('express');
const mongoose = require('mongoose');

require('./services/passport');
require('./models/User');

const keys = require('./config/keys');

const app = express();
mongoose.connect(keys.mongoURI);

require('./routes/userAuthRoutes')(app);
require('./routes/upcoming')(app);
require('./routes/search')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
