import CreateUser from "../components/CreateUser";
import { connect } from "react-redux";
import {createUser} from "../actions";

function mapStateToProps(state) {
  return {
    users: state.users
  };
}
  
function mapDispatchToProps(dispatch) {
  return {
    createUser: (user) => {      
      const action = createUser(user);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateUser);
