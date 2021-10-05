const igdb = require('../api/igdb');

const fetchSearched = async (term) => {
  return (response = await igdb({
    method: 'POST',
    data: `
      search "${term}"; 
      fields name, first_release_date, total_rating, summary, category, screenshots.image_id, videos.*, cover.url; 
      where rating != null & category = 0;  
      limit 20;
      `,
    url: 'https://api.igdb.com/v4/games/'
  }));
};

module.exports = (app) => {
  app.get('/api/search', async (req, res) => {
    const { data } = await fetchSearched(req.query.term);
    res.send(data);
  });
};
