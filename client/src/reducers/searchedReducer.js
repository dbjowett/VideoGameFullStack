export default (oldGames = [], action) => {
  if (action.type === 'SEARCHED_GAMES') {
    return [...action.payload];
  } else {
    return oldGames;
  }
};
