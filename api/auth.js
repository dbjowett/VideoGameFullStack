import axios from 'axios';

// ENV Variables
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

////// GET AUTHORIZATION TO USE THE DATABASE ///////////////
const getAuth = async () => {
  const url = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`;
  const options = {
    method: 'POST'
  };
  const response = await axios(url, options);
  const accessToken = response.data.access_token;
  return accessToken;
};

export default getAuth;
