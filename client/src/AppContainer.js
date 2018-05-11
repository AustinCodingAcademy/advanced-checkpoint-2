import App from "./App";
import { loadRecipes } from "./actions";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    redirect: state.redirect
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadRecipes: function() {
      let action = loadRecipes();
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
