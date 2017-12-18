import { connect } from 'react-redux';
import CreateThings from '../components/CreateThings';
import { createUser } from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    createGame(user) {
      dispatch(createUser(user));
    }
  };
}

export default connect(null, mapDispatchToProps)(CreateThings);
