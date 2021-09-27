import axios from 'axios';
import { UPCOMING_GAMES } from './types';

const fetchUpcoming = () => {
  axios
    .get('/api/upcoming')
    .then((response) => {
      setGames(response.data);
    })
    .catch((e) => console.log(`Error`, e));
};
