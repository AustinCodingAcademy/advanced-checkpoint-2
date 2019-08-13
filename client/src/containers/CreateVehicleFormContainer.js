import { connect } from "react-redux";
import VehicleForm from "../components/VehicleForm";
import { createVehicle } from "../actions";


function mapDispatchToProps(dispatch) {
  return {
    createVehicle: function (vehicle) {
      dispatch(createVehicle(vehicle));
    }
  }
}

export default connect(null, mapDispatchToProps)(VehicleForm);
