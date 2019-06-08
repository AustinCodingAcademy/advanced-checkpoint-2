import App from "../App";
import "../App.css";
import { connect } from "react-redux";
import {loadVehicles, loadVehicle, createVehicle, deleteVehicle} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    getVehicles: () => {
      const action = loadVehicles();
      dispatch(action);
    },
    getVehicle: (id) => {
      const action = loadVehicle(id);
      dispatch(action);
    },
    createVehicle: () => {
      const action = createVehicle();
      dispatch(action);
    },
    deleteVehicle: (id) => {
      const action = deleteVehicle(id);
      dispatch(action);
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
