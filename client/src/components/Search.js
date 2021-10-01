import React, { useEffect, useState } from 'react';
import SearchedGameList from './SearchedGameList';
import { fetchSearched } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [visible, setVisible] = useState(true);

  const dispatch = useDispatch();
  const games = useSelector((state) => state.searched);

  const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debouncedValue;
  };

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    games.length > 0 ? setVisible(true) : setVisible(false);
    if (debouncedSearchTerm) {
      dispatch(fetchSearched(debouncedSearchTerm));
    } else {
      return null;
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <div class='searchBox'>
        <input placeholder='Search Video Games' onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      {/* <SearchedGameList /> */}
      {visible ? <SearchedGameList title='Search' gameArray={games} /> : <div>hello</div>}
    </div>
  );
};

export default Search;
