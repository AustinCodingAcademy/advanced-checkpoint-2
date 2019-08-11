import { connect } from 'react-redux';
import User from '../components/User';
import { getUser } from '../actions';

function mapStateToProps(state) {
  return {
    game: state.game
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUser(id) {
      dispatch(getUser(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
