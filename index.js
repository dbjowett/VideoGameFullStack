const express = require('express');
const PORT = process.env.PORT || 5000;
// const cors = require('cors');

const app = express();

require('./api_routes/upcoming')(app);
require('./api_routes/search')(app);

// app.use(cors());

app.listen(PORT, () => `Server running on port: ${PORT}`);
