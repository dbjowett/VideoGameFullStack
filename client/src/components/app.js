import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import Header from './header';
// import Search from './Search';
// import GameContainer from './GameContainer';
import Footer from './footer';
import Upcoming from './Upcoming';
import GamePage from './GamePage';

class App extends React.Component {
  render() {
    return (
      <div className='body'>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Landing} />
            <Route path='/upcoming' component={Upcoming} />
            <Route path='/gamepage' component={GamePage} />
            <Footer />
            {/* <Search /> */}
            {/* <GameContainer /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
