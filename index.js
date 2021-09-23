const express = require('express');
const port = process.env.PORT || 5000;
const igdb = require('./api/igdb');
const bodyParser = require('body-parser');
// const getAuth = require('./api/auth');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const oneWeek = 604800;
const timeNow = Math.floor(Date.now() / 1000);

const options = {
  method: 'POST',
  data: `
        fields name, release_dates.*, summary, cover.*; where platforms= (6,48,49,130, 169,167) & cover != null &category = 0 
        & first_release_date != n & first_release_date >${timeNow} & first_release_date < ${timeNow + oneWeek}; sort first_release_date asc; limit 100;
            `,
  url: 'https://api.igdb.com/v4/games/'
};

// igdb(options).then((res) => {
//   console.log(`res`, res);
// });

app.get('/', (req, res) => {
  // console.log(`upcoming()`, upcoming());
  res.send('<h1>Hello</h1>');
  console.log(`Hello`);
});

app.listen(port, (port) => `Server running on port: ${port}`);
