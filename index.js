const express = require('express');
require('./services/passport');
const PORT = process.env.PORT || 5000;

const app = express();

require('./routes/userAuthRoutes')(app);
require('./routes/upcoming')(app);
require('./routes/search')(app);

app.listen(PORT);
