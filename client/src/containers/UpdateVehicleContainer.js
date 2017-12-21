import {connect} from "react-redux";
import UpdateVehicle from "../components/UpdateVehicle";
import {getVehicle, deleteVehicle} from "../actions";

function mapStateToProps(state){
  console.log(state)
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

export default connect (mapStateToProps,mapDispatchToProps)(UpdateVehicle);
