import React, { Component } from 'react';
import UpcomingGameList from './UpcomingGameList';
import { connect } from 'react-redux';
import { fetchUpcoming } from '../actions';

class Upcoming extends Component {
  componentDidMount() {
    return this.props.upcoming.length === 0 ? this.props.fetchUpcoming() : null;
  }

  render() {
    return (
      <div className='resultsContainer'>
        <UpcomingGameList title='Upcoming' gameArray={this.props.upcoming} />
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
