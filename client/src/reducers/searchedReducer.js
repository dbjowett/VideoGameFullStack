export default (oldGames = [], action) => {
  if (action.type === 'SEARCHED_GAMES') {
    console.log('if in Searched');
    return [...action.payload];
  } else {
    console.log('else in Searched');
    return oldGames;
  }
};
