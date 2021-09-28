import axios from 'axios';
// import { UPCOMING_GAMES } from './types';

const fetchUpcoming = () => {
  return function (dispatch) {
    axios
      .get('/api/upcoming')
      .then((res) => {
        dispatch({ type: 'UPCOMING_GAMES', payload: res.data });
      })
      .catch((e) => console.log(`There was an error`, e));
  };
};

export default fetchUpcoming;
