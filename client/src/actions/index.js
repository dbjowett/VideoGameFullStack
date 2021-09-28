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

export const fetchSearched = (term) => {
  return function (dispatch) {
    axios.post('/api/search', term).then((res) => {
      dispatch({ type: SEARCHED_GAMES, payload: res.data }).catch((e) => console.log('There was an error', e));
    });
  };
};
