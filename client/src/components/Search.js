import React, { useEffect, useState } from 'react';
import igdb from '../api/igdb';
import SearchedGameList from './SearchedGameList';
import { fetchSearched } from '../actions';
import { connect } from 'react-redux';

const Search = () => {
  const [term, setSearch] = useState('');
  const [results, setResult] = useState([]);
  const [visible, setVisible] = useState(true);

  /// Start of UseEffect
  useEffect(() => {
    term.length && results.length > 0 ? setVisible(true) : setVisible(false);

    const search = async () => {
      // API call and setResult(data)
      this.props.fetchSearched(term);
    };

    let timeoutID = 0;

    if (term && !results.length) {
      search(term);
    } else {
      const timeoutID = setTimeout(() => {
        if (term) {
          search(term);
        }
      }, 100);
    }

    return () => {
      clearTimeout(timeoutID);
    };
  }, [term]);
  ///End of  UseEffect

  return (
    <div>
      <div>
        <form
          className='searchBox'
          onSubmit={(e) => {
            e.preventDefault();
            setSearch(term);
          }}>
          <input type='text' placeholder='Search for games..' value={term} onChange={(e) => setSearch(e.target.value)} />
          <a href='foo.com'>
            <i className='fa fa-search fa-lg'></i>
          </a>
        </form>
      </div>
      {visible ? <SearchedGameList title='Search' gameArray={results} /> : null}
    </div>
  );
};

const mapState = (state) => {
  {
    games: state.searchedGames;
  }
};

export default connect(mapState, { fetchSearched })(Search);
