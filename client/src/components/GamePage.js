import React from 'react';
import { useSelector } from 'react-redux';

const GamePage = ({ match }) => {
  const gameId = parseInt(match.params.id);

  const searchedgames = useSelector((state) => state.searched);
  const upcominggames = useSelector((state) => state.upcoming);
  const allGames = [...searchedgames, ...upcominggames];
  const currentGame = allGames.find((game) => game.id === gameId);

  const renderedVideos = currentGame.video ? currentGame.videos.slice(0, 3).map((video) => <iframe width='200' height='200' frameBorder='0' className='video' src={'https://www.youtube.com/embed/${video.video_id}'} />) : null;
  return (
    <div>
      <div className='hero'>
        <img className='bannerImg' src={`https://images.igdb.com/igdb/image/upload/t_1080p/${currentGame.screenshots[0].image_id}.jpg`} alt='' />
        <div className='logo'>
          <img className='iconImg' src={currentGame.cover.url.replace('t_thumb', 't_cover_big')} alt='' srcset='' />
          <div className='gameTitle'>{currentGame.name}</div>
        </div>
      </div>
      <div className='container'>
        <div className='summaryGameInfo'>
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
          </div>
          <h2>Summary</h2>
          <div>{currentGame.summary}</div>
        </div>
        <div className='mediaInfo'>
          <div className='screenshots'>
            <h2>Screenshots</h2>
            <img src={`https://images.igdb.com/igdb/image/upload/t_screenshot_med/${currentGame.screenshots[1].image_id}.jpg`} alt='' />
            <img src={`https://images.igdb.com/igdb/image/upload/t_screenshot_med/${currentGame.screenshots[2].image_id}.jpg`} alt='' />
            <img src={`https://images.igdb.com/igdb/image/upload/t_screenshot_med/${currentGame.screenshots[3].image_id}.jpg`} alt='' />
          </div>
          <div className='videos'>
            <h2>Videos</h2>
            {/* <iframe width='200' height='200' src={'www.youtube.com/embed/5nLipy-Z4yo'} /> */}
            {renderedVideos}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
