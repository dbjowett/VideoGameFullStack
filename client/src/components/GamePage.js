import React from 'react';
import { useSelector } from 'react-redux';

const GamePage = ({ match }) => {
  console.log(match.params.id);

  const searchedgames = useSelector((state) => state.searched);
  const upcominggames = useSelector((state) => state.upcoming);
  const allGames = [...searchedgames, ...upcominggames];
  const currentGame = allGames.find((game) => game.id === parseInt(match.params.id));

  return (
    <div>
      <div className='hero'>
        <img className='bannerImg' src='https://cdn.wccftech.com/wp-content/uploads/2016/06/The-Witcher-3-Blood-and-Wine.jpg' alt='' />
        <div className='logo'>
          <img className='iconImg' src={currentGame.cover.url.replace('t_thumb', 't_cover_big')} alt='' srcset='' />
          <div className='gameTitle'>{currentGame.name}</div>
        </div>
      </div>
      <div className='container'>
        <div className='gameInfo'>
          <ul className='gameInfoItems'>
            <h2>Game Info</h2>
            <li className='info'>Rating: 95%</li>
            <li className='info'>Release: Sept 2017</li>
            <li className='info'>Players: 1</li>
            <li className='info'>Genre: Role-Playing Game</li>
          </ul>
          <ul className='platformInfo'>
            <h2>Platforms</h2>
            <li className='gamePlatform'>PS5</li>
            <li className='gamePlatform'>Xbox</li>
            <li className='gamePlatform'>PS4</li>
            <li className='gamePlatform'>Xbox Series</li>
            <li className='gamePlatform'>PC</li>
          </ul>
          {/* <div>{currentGame.summary}</div> */}
        </div>
        <div className='mediaInfo'>
          <div className='screenshots'>
            <h2>Screenshots</h2>
            <img src='https://via.placeholder.com/200' alt='' />
            <img src='https://via.placeholder.com/200' alt='' />
            <img src='https://via.placeholder.com/200' alt='' />
          </div>
          <div className='videos'>
            <h2>Videos</h2>
            <img src='https://via.placeholder.com/200' alt='' />
            <img src='https://via.placeholder.com/200' alt='' />
            <img src='https://via.placeholder.com/200' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
