// const axios = require('axios');
// const getAuth = require('./auth');

// // ENV Variables
// const clientId = process.env.CLIENT_ID;

// const instance = axios.create({
//   headers: {
//     Accept: 'application/json',
//     'Client-ID': clientId,
//     'Access-Control-Allow-Origin': '*'
//   }
// });

// instance.interceptors.request.use(
//   async (config) => {
//     const token = await getAuth();
//     if (token) {
//       console.log(`IsAuth`, token);
//       config.headers['Authorization'] = `Bearer ${token}`;
//     } else {
//       console.log(`Noauth`);
//       delete instance.defaults.headers['Authorization'];
//     }

//     return config;
//   },

//   (error) => Promise.reject(error)
// );

// module.exports = instance;
