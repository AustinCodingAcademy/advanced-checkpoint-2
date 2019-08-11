import { connect } from 'react-redux';
import Users from '../components/Users';
import { deleteUser } from '../actions';

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteUser(user) {
      dispatch(deleteUser(user));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
