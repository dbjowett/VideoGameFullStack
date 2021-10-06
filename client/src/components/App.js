import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './Landing';
import Header from './header';
import Search from './Search';
// import GameContainer from './GameContainer';
import Footer from './Footer';
import Upcoming from './Upcoming';
import GamePage from './GamePage';

class App extends React.Component {
  render() {
    return (
      <div className='body'>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/games'>
                <Search />
                {/* <GameContainer /> */}
                <Upcoming />
              </Route>
              <Route path='/games/:id' component={GamePage} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
