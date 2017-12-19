import { connect } from "react-redux";
import Application from "../components/Application";
import { getApplication } from "../actions";

function mapStateToProps(state) {
  return {
    application: state.application
  };
}

function mapDispatchToProps (dispatch) {
    return {
        getApplication: function (application) {
          dispatch(getApplication(application));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);