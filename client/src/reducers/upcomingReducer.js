export default (oldGames = [], action) => {
  if (action.type === 'UPCOMING_GAMES') {
    return [...oldGames, action.payload];
  } else {
    return oldGames;
  }
};
