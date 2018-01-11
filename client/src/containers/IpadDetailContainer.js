import {connect} from "react-redux";
import IpadDetail from "../components/IpadDetail";
import {getIpad, deleteIpad} from "../actions";

function mapStateToProps(state){
  return {
    ipad: state.ipad
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getIpad: function(id) {
      dispatch(getIpad(id));
    },
    deleteIpad: function(id) {
      dispatch(deleteIpad(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IpadDetail);
