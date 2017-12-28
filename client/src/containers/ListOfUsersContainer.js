import { connect } from "react-redux";
import ListOfUsers from "./../components/ListOfUsers.js";
import { deleteUser } from "../actions";

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteUser: function(id) {
      dispatch(deleteUser(id));
    }
  };
}

const ListOfUsersContainer = connect(mapStateToProps,mapDispatchToProps)(ListOfUsers);
export default ListOfUsersContainer;
