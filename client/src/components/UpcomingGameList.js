import '../CSS_Files/GameList.css';
import { Link } from 'react-router-dom';
// import Skeleton from 'react-loading-skeleton';

const UpcomingGameList = ({ title, gameArray }) => {
  const Games = gameArray.map((game) => {
    const cover = game.cover ? game.cover.url.replace('t_thumb', 't_cover_big') : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';
    console.log(game);
    const dates = game.release_dates.map((rd) => new Date(rd.date * 1000));
    const diffInDays = Math.floor((dates[0] - new Date()) / (1000 * 3600 * 24));

    return (
      <Link to={`/games/${game.id}`} style={{ textDecoration: 'none', color: 'white' }}>
        <div key={game.id} className='gameItem'>
          <img className='gamePhoto' src={cover} alt={game.name} />
          <div className='gameDesc'>
            <h3 className='gameName'>{game.name}</h3>
            <div className='summary'>
              {game.summary ? game.summary.slice(0, 147) : 'No summary available'}
              ...
            </div>
            <div className='gameInfoBox'>
              <div className='releaseDate'>{game.release_dates[0].human.split(',')[0]}</div>
              {game.genres ? <div className='releaseDate'>{game.genres[0].name}</div> : <div className='releaseDate'>Unknown</div>}
            </div>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <div>
      <div className='gameContainerTitle'>
        <span className='line'></span>
        <h1>{title}</h1>
      </div>
      <div className='gameContainer'>{Games}</div>
    </div>
  );
};

export default UpcomingGameList;
