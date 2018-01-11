import { connect } from "react-redux";
import IpadForm from "../components/IpadForm";
import { createIpad } from "../actions";


function mapDispatchToProps(dispatch) {
  return {
    createIpad: function (ipad) {
      dispatch(createIpad(ipad));
    }
  }
}

export default connect(null, mapDispatchToProps)(IpadForm);
