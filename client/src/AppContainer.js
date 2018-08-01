import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { fetchRobots } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    fetchRobots: function(){
      dispatch(fetchRobots());
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
