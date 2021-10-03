import React from 'react';

export default function GameList({ title, release, rating, gameArray }) {
  const renderedGames = gameArray.map((game) => {
    //Construct cover
    const cover = game.cover ? game.cover.url.replace('t_thumb', 't_cover_big') : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';

    return (
        <Link to={`/games/${game.id}`} style={{ textDecoration: 'none', color: 'white' }}>
          <div key={game.id} className='gameItem'>
            <img className='gamePhoto' src={cover} alt={game.name} />
            <div className='gameDesc'>
              <h3>{game.name}</h3>
              <div className='summary'>
                {game.summary ? game.summary.slice(0, 137) : 'No summary available'}
                ...
              </div>
              <div className='gameInfoBox'>
                <div className='releaseDate'>{release}</div>
                <div className='releaseDate'>{rating}</div>
                <div className='releaseDate'>RPG</div>
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
  
  export default GameList;