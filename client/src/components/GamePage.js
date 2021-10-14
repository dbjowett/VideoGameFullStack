import React from 'react';
import { useSelector } from 'react-redux';
// import { useState, useEffect } from 'react';

const GamePage = ({ match }) => {
  const searchedgames = useSelector((state) => state.searched);
  const upcominggames = useSelector((state) => state.upcoming);
  const allGames = [...searchedgames, ...upcominggames];
  const currentGame = allGames.find((game) => game.id === parseInt(match.params.id));

  // Mapping arrays
  const renderedImages = currentGame.screenshots ? currentGame.screenshots.slice(0, 3).map((img) => <img src={`https://images.igdb.com/igdb/image/upload/t_screenshot_med/${img.image_id}.jpg`} alt='' />) : null;
  const renderedVideos = currentGame.videos ? currentGame.videos.slice(0, 3).map((video) => <iframe width='560' height='340' frameBorder='0' className='video' title={`${video.name}`} src={`https://www.youtube.com/embed/${video.video_id}`} />) : null;
  const renderedPlatforms = currentGame.platforms ? currentGame.platforms.map((platform) => <li className='gamePlatform'>{platform.abbreviation}</li>) : null;
  const renderedGenres = currentGame.genres ? currentGame.genres.map((genre) => <li>{genre.name}</li>) : null;
  currentGame.videos.map((video) => console.log(video.name));

  console.log('current game', currentGame.videos);
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
        <div className='div1'>
          <ul className='gameInfoItems'>
            <h2>Game Info</h2>
            {currentGame.total_rating ? <li className='info'>Rating: {Math.round(currentGame.total_rating)}%</li> : null}
            <li className='info'>Release: {currentGame.release_dates ? currentGame.release_dates[0].human : currentGame.release_dates[0].human}</li>
            <li className='info'>Players: 1</li>
          </ul>
        </div>

        <div className='div2'>
          <h2>Genres</h2>
          <ul>{renderedGenres}</ul>
        </div>
        <div className='div3'>
          <ul className='platformInfo'>
            <h2>Platforms</h2>
            {renderedPlatforms}
          </ul>
        </div>
        <div className='div4'></div>

        <div className='screenshots div5'>
          <h2>Screenshots</h2>
          {renderedImages}
        </div>
        <div className='div6'>
          <h2>Summary</h2>
          <div>{currentGame.summary}</div>
        </div>
        <div className='div7'></div>
        {currentGame.videos ? (
          <div className='videos div8'>
            <h2>Videos</h2>
            {renderedVideos}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default GamePage;
