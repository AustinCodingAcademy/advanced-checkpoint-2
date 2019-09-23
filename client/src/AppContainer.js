import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadEntries } from "./actions/index";

function mapDispatchToProps(dispatch) {
  return {
    loadEntries: function() {
      dispatch(loadEntries())
    }
  };
};

export default connect(null, mapDispatchToProps)(App);
