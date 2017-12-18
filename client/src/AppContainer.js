import App from './App';
import './App.css';
import { connect } from 'react-redux';
import { loadUsers } from './actions';

function mapDispatchToProps(dispatch) {
  return {
    loadUsers() {
      dispatch(loadUsers());
    }
  };
}

export default connect(null, mapDispatchToProps)(App);
