import { connect } from "react-redux";
import ListOfIpads from "../components/ListOfIpads";
import { deleteIpad } from "../actions"

function mapStateToProps(state) {
  return {
    ipad: state.ipads
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteIpad: function (id) {
      dispatch(deleteIpad(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfIpads);
