import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadComputers} from "./actions";


function mapDispatchToProps(dispatch) {
  return {
    loadComputers: function () {
      dispatch(loadComputers());
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
