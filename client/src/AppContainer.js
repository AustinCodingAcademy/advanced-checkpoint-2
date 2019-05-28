import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadIpads } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadIpads: function (ipads) {
      dispatch(loadIpads(ipads))
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
