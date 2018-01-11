import { connect } from "react-redux";
import IpadForm from "../components/IpadForm";
import { updateIpad } from "../actions";

function mapStateToProps(state){
  return {
    ipad: state.ipad
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateIpad: function (id) {
      dispatch(updateIpad(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IpadForm);
