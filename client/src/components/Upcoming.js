import React, { Component } from 'react';
import UpcomingGameList from './UpcomingGameList';
import { connect } from 'react-redux';
import { fetchUpcoming } from '../actions';

class Upcoming extends Component {
  componentDidMount() {
    this.props.fetchUpcoming();
  }

  render() {
    return (
      <div className='resultsContainer'>
        <UpcomingGameList title='Upcoming' release='3 days' rating='10 likes' gameArray={this.props.upcoming} />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    upcoming: state.upcoming
  };
};

export default connect(mapState, { fetchUpcoming })(Upcoming);
