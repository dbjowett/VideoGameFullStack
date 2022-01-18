import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const GamePage = ({ match }) => {
  const searchedgames = useSelector((state) => state.searched);
  const upcominggames = useSelector((state) => state.upcoming);
  const allGames = [...searchedgames, ...upcominggames];
  const currentGame = allGames.find((game) => game.id === parseInt(match.params.id));

  // Mapping arrays
  const renderedImages = currentGame.screenshots ? currentGame.screenshots.slice(0, 3).map((img) => <img src={`https://images.igdb.com/igdb/image/upload/t_screenshot_med/${img.image_id}.jpg`} alt='' />) : null;
  const renderedVideos = currentGame.videos ? currentGame.videos.slice(0, 3).map((video) => <iframe frameBorder='0' className='video' title={`${video.name}`} src={`https://www.youtube.com/embed/${video.video_id}`} />) : null;
  const renderedPlatforms = currentGame.platforms ? currentGame.platforms.map((platform) => <li className='gamePlatform'>{platform.abbreviation}</li>) : null;
  const renderedGenres = currentGame.genres ? currentGame.genres.map((genre) => <li>{genre.name}</li>) : null;

  // Summary Show
  const [readMore, setReadMore] = useState(false);

  if (currentGame.summary.length > 250) {
    return;
  }

  // console.log('current game', currentGame.videos);
  return (
    <div>
      <div className='hero'>
        <img className='bannerImg' src={`https://images.igdb.com/igdb/image/upload/t_1080p/${currentGame.screenshots[0].image_id}.jpg`} alt='' />
        <div className='logo'>
          <img className='iconImg' src={currentGame.cover.url.replace('t_thumb', 't_cover_big')} alt='' srcset='' />
          <div className='gameTitle'>{currentGame.name}</div>
        </div>
      </div>
      <div className='singleGameContainer'>
        {/* Game Info */}
        <div className='infoAndScreenshots'>
          <div className='gameInfoContainer'>
            <ul>
              <h2>Game Info</h2>
              {currentGame.total_rating ? <li className='info'>Rating: {Math.round(currentGame.total_rating)}%</li> : null}
              <li className='info'>Release: {currentGame.release_dates ? currentGame.release_dates[0].human : currentGame.release_dates[0].human}</li>
              <li className='info'>Players: 1</li>
            </ul>
            <div>
              <h2>Genres</h2>
              <ul>{renderedGenres}</ul>
            </div>
            <div>
              <ul>
                <h2>Platforms</h2>
                {renderedPlatforms}
              </ul>
            </div>
          </div>
          {/* Screen shots */}
          <div className='screenshots'>
            <h2>Screenshots</h2>
            {renderedImages}
          </div>
        </div>

        {/* Summary */}
        <div className='summaryAndVideos'>
          <div className='gameSummary'>
            <h2>Summary</h2>
            {readMore ? currentGame.summary : `${currentGame.summary.substring(0, 250)}`}
            <button className='readMore' onClick={() => setReadMore(!readMore)}>
              {readMore ? 'Read Less ' : 'Read More'}
            </button>
          </div>
          {/* Videos */}
          {currentGame.videos ? (
            <div className='videos'>
              <h2>Videos</h2>
              {renderedVideos}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default GamePage;
