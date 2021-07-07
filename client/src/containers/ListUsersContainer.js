import ListUsers from "../components/ListUsers";
import { connect } from "react-redux";
import {deleteUser, showUser} from "../actions";

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteUser: (id) => {      
      const action = deleteUser(id);
      dispatch(action);
    },
    showUser: (id) => {      
      const action = showUser(id);
      dispatch(action);
    },

  };
}
  

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);
