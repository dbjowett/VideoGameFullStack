import { combineReducers } from 'redux';
import upcomingReducer from './upcomingReducer';
import searchedReducer from './searchedReducer';

export default combineReducers({
  upcoming: upcomingReducer,
  searched: searchedReducer
});
