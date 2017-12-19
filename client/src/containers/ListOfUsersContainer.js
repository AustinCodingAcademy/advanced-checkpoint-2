import { connect } from "react-redux";
import ListOfUsers from "./../components/ListOfUsers.js";

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

const ListOfUsersContainer = connect(mapStateToProps,mapDispatchToProps)(ListOfUsers);
export default ListOfUsersContainer;
