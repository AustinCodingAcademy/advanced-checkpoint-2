import { connect } from "react-redux";
import CreateUser from "./../components/CreateUser.js";
import { createUser } from "../actions";

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createUser: function (id) {
      dispatch(createUser(id));
    }
  };
}

const CreateUserContainer = connect(mapStateToProps,mapDispatchToProps)(CreateUser);
export default CreateUser;
