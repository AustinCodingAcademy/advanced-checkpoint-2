import {connect} from "react-redux";
import GoatDetail from "../components/GoatDetail";
import {getGoat} from "../actions";

function mapStateToProps(state) {
  return {
    goat: state.goat
  };
}

function mapDispatchToProps (dispatch) {
  return {
    getGoat: function (id) {
      let action = getGoat(id);
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GoatDetail);
