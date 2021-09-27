import React, { useEffect, Component } from 'react';
import UpcomingGameList from './UpcomingGameList';
import { connect } from 'react-redux';
import fetchUpcoming from '../actions';

// const Upcoming = function (props) {
//   useEffect(() => {
//     props.fetchUpcoming();
//   }, []);

//   const games = [];
//   return (
//     <div>
//       <UpcomingGameList title='Upcoming (7 days)' gameArray={games} />
//     </div>
//   );
// };

// const mapState = (state) => {
//   const games = state.upcoming;
// };

// export default connect(mapState, fetchUpcoming)(Upcoming);

class Upcoming extends Component {
  componentDidMount() {
    this.props.fetchUpcoming();
  }

  render() {
    const games = [];
    return (
      <div>
        <UpcomingGameList title='Upcoming (7 days)' gameArray={games} />
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
