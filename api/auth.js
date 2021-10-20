const axios = require('axios');
const keys = require('../config/keys');

const getAuth = async () => {
  const url = `https://id.twitch.tv/oauth2/token?client_id=${keys.twitchId}&client_secret=${keys.twitchSecret}&grant_type=client_credentials`;
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
