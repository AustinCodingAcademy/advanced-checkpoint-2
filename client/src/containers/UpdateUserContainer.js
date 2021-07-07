import UpdateUser from "../components/UpdateUser";
import { connect } from "react-redux";
import {updateUser} from "../actions";

function mapStateToProps(state) {
  return {
    users: state.users
  };
}
  
function mapDispatchToProps(dispatch) {
  return {
    updateUser: (id, user) => {  
      const action = updateUser(id, user);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateUser);
