
import App from "./App";
import { connect } from "react-redux";
import {loadUsers} from "./actions";

function mapStateToProps(state) {
  return {
    users: state.users  
  };
}
  
function mapDispatchToProps(dispatch) {
  return {
    loadUsers: () => {
      const action = loadUsers();
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
