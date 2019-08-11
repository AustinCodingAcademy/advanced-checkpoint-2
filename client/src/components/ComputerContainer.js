import { connect } from "react-redux";
import Computer from "./Computer";
import {getComputer} from "../actions"

function mapStateToProps(state) {
  
  
  return {
    computer: state.computer
  };
}

function mapDispatchToProps (dispatch) {
    return {
        getComputer: function (id) {
          dispatch(getComputer(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Computer);
