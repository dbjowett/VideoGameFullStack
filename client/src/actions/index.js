import axios from 'axios';
import { SEARCHED_GAMES, UPCOMING_GAMES } from './types';

export const fetchUpcoming = () => {
  return function (dispatch) {
    axios
      .get('/api/upcoming')
      .then((res) => {
        dispatch({ type: UPCOMING_GAMES, payload: res.data });
      })
      .catch((e) => console.log(`There was an error`, e));
  };
};

const setSearched = (data) => {
  console.log('hell');
  return { type: SEARCHED_GAMES, payload: data.data };
};

export const fetchSearched = (term) => {
  return (dispatch) => {
    axios
      .get('/api/search', { params: { term } })
      .then((res) => {
        dispatch(setSearched(res));
      })
      .catch((e) => console.error(e));
  };
};

// export const fetchSearched = (term) => {
//   axios
//     .get('/api/search', term)
//     .then((res) => {
//       return { type: SEARCHED_GAMES, payload: res.data };
//     })
//     .catch((e) => console.log('There was an error', e));
// };
