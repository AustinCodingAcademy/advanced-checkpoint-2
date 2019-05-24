import { connect } from "react-redux";
import UserDetail from "./../components/UserDetail.js";
import { getUser } from "../actions";

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: function(id) {
      dispatch(getUser(id));
    }
  };
}

const UserDetailContainer = connect(mapStateToProps,mapDispatchToProps)(UserDetail);
export default UserDetailContainer;
