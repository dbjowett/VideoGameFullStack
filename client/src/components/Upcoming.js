import React, { useEffect, Component } from 'react';
import UpcomingGameList from './UpcomingGameList';
import { connect } from 'react-redux';
import fetchUpcoming from '../actions';

// useSelector .. useDispatch

// const Upcoming = function (props) {
//   useEffect(() => {
//     props.fetchUpcoming();
//   }, []);

//   return (
//     <div>
//       <UpcomingGameList title='Upcoming (7 days)' gameArray={games} />
//     </div>
//   );
// };

// export default Upcoming;

class Upcoming extends Component {
  componentDidMount() {
    this.props.fetchUpcoming();
  }

  render() {
    const games = [];
    console.log('Props', this.props.upcoming);
    return (
      <div>
        <UpcomingGameList title='Upcoming (7 days)' gameArray={this.props.upcoming} />
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
