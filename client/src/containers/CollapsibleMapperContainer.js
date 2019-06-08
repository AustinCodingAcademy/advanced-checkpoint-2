import { connect } from "react-redux";
import {deleteVehicle} from "../actions";
import CollapsibleMapper from "../components/CollapsibleMapper";


function mapDispatchToProps(dispatch) {
  return {
    remove: (id) => {
      const action = deleteVehicle(id);
      dispatch(action);
    }
  };
}

export default connect(null,mapDispatchToProps)(CollapsibleMapper);
