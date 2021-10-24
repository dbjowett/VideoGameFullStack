import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './header';
import Search from './Search';
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
              <Route exact path='/'>
                <Search />
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
