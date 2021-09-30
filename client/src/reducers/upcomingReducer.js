export default (oldGames = [], action) => {
  if (action.type === 'UPCOMING_GAMES') {
    console.log('Upcoming games if');
    return [...oldGames, ...action.payload];
  } else {
    console.log('action', action.type);
    return oldGames;
  }
};
