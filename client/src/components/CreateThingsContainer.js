import { connect } from "react-redux";
import CreateThings from "./CreateThings";
import {
  createComputer
} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    createComputer: function (computer) {
      dispatch(createComputer(computer));
    }
  };
}

export default connect(null,mapDispatchToProps)(CreateThings);