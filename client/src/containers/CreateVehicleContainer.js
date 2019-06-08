import { connect } from "react-redux";
import CreateVehicle from "../components/CreateVehicle";
import { createVehicle } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    createVehicle: (v) => {
      dispatch(createVehicle(v));
    },
  };
}

export default connect(null,mapDispatchToProps)(CreateVehicle);
