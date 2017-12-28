import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadCars } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadCars: function () {
      dispatch(loadCars());
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
