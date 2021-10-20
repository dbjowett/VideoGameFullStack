const axios = require('axios');
const getAuth = require('./auth');
const keys = require('../config/keys');

const instance = axios.create({
  headers: {
    Accept: 'application/json',
    'Client-ID': keys.twitch_id,
    'Access-Control-Allow-Origin': '*'
  }
});

instance.interceptors.request.use(
  async (config) => {
    const token = await getAuth();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    } else {
      console.log(`Noauth`);
      delete instance.defaults.headers['Authorization'];
    }

    return config;
  },

  (error) => Promise.reject(error)
);

module.exports = instance;
