import React, { useState, useEffect } from 'react';
import UpcomingGameList from './UpcomingGameList';
import axios from 'axios';

export default function Upcoming() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    axios
      .get('/api/upcoming')
      .then((response) => {
        setGames(response.data);
      })
      .catch((e) => console.log(`Error`, e));
  }, []);

  return (
    <div>
      <UpcomingGameList title='Upcoming (7 days)' gameArray={games} />
    </div>
  );
}
