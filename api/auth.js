const axios = require('axios');
require('dotenv').config();

// ENV Variables
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

const getAuth = async () => {
  const url = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`;
  const options = {
    method: 'POST'
  };

  try {
    const response = await axios(url, options);
    return response.data.access_token;
  } catch (error) {
    console.log(`Couldn't get authorization: `, error);
  }
};

module.exports = getAuth;
