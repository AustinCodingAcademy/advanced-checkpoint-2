import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadGames } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadGames() {
      dispatch(loadGames());
    }
  };
}

export default connect(null, mapDispatchToProps)(App);
