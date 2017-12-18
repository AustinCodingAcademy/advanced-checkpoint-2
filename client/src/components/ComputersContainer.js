import { connect } from "react-redux";
import Computers from "./Computers";
import {deleteComputer} from "../actions";

function mapStateToProps(state) {
  return {
    computers: state.computers
  };
}

function mapDispatchToProps (dispatch) {
  return {
    deleteComputer: function (id) {
      let action = deleteComputer(id);
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Computers);
