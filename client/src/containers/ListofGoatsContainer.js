import { connect } from "react-redux";
import ListofGoats from "../components/ListofGoats";
import {deleteGoat} from "../actions";

function mapStateToProps(state) {
  return {
    goats: state.goats
  };
}

function mapDispatchToProps (dispatch) {
  return {
    deleteGoat: function (id) {
      let action = deleteGoat(id);
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListofGoats);
