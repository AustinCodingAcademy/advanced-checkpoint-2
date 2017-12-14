import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadGoats } from "./actions";

function mapDispatchToProps (dispatch) {
  return {
    loadGoats: function () {
      dispatch(loadGoats());
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
