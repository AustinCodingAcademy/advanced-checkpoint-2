import { connect } from "react-redux";
import VehicleForm from "../components/VehicleForm";
import { updateVehicle } from "../actions";

function mapStateToProps(state){
  return {
    vehicle: state.vehicle
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateVehicle: function (id) {
      dispatch(updateVehicle(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleForm);
