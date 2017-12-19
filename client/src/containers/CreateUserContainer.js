import { connect } from "react-redux";
import CreateUser from "./../components/CreateUser.js";

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveUser:function(user){
      //call action that doesn't exist yet
    }
  }
}

const CreateUserContainer = connect(mapStateToProps,mapDispatchToProps)(CreateUser);
export default CreateUser;
