import {connect} from "react-redux";
import VehicleDetail from "../components/VehicleDetail";
import {getVehicle, deleteVehicle} from "../actions";

function mapStateToProps(state){
  return {
    vehicle: state.vehicle
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getVehicle: function(id) {
      dispatch(getVehicle(id));
    },
    deleteVehicle: function(id) {
      dispatch(deleteVehicle(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleDetail);
