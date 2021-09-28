const igdb = require('../api/igdb');
const term = 'zelda';

const options = {
  method: 'POST',
  data: `search "${term}"; fields name, first_release_date, total_rating, summary, category, cover.url; where rating != null & category = 0;  limit 20;`,
  url: '/v4/games/'
};

const fetchSearched = async (term) => {
  return (response = await igdb(options));
};

module.exports = (app) => {
  app.get('/api/upcoming', async (req, res) => {
    const { data } = await fetchSearched();
    res.send(data);
  });
};
