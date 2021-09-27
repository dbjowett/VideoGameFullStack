export default (oldGames = [], action) => {
  if (action.type === 'SEARCHED_GAMES') {
    return [...oldGames, action.payload];
  } else {
    return oldGames;
  }
};
