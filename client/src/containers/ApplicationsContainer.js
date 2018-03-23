import { connect } from "react-redux";
import Applications from "../components/Applications";
import { removeApplication } from "../actions";

function mapStateToProps(state) {
  return {
    applications: state.applications,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeApplication: function (id) {
      dispatch(removeApplication(id));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Applications);