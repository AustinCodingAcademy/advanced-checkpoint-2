import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadApplications} from "./actions";


function mapDispatchToProps(dispatch) {
  return {
    loadApplications: function () {
      dispatch(loadApplications());
    },
  };
}

export default connect(null,mapDispatchToProps)(App);