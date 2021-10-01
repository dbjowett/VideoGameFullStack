const igdb = require('../api/igdb');

const oneWeek = 604800;
const timeNow = Math.floor(Date.now() / 1000);

const options = {
  method: 'POST',
  data: `
        fields name, release_dates.*, summary, cover.*; 
        where platforms= (6,48,49,130, 169,167) & cover != null & category = 0 
        & first_release_date != n & first_release_date >${timeNow} & first_release_date < ${timeNow + oneWeek}; 
        sort first_release_date asc; 
        limit 14;
            `,
  url: 'https://api.igdb.com/v4/games/'
};

const fetchUpcomingGames = async () => {
  return (response = await igdb(options));
};

module.exports = (app) => {
  app.get('/api/upcoming', async (req, res) => {
    const { data } = await fetchUpcomingGames();
    res.send(data);
  });
};
