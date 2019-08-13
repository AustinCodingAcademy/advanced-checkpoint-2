import { connect } from "react-redux";
import ListOfVehicles from "../components/ListOfVehicles";
import { deleteVehicle } from "../actions"

function mapStateToProps(state) {
  return {
    vehicles: state.vehicles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteVehicle: function (id) {
      dispatch(deleteVehicle(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfVehicles);
