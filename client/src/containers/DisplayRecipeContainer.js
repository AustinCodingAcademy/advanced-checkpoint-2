import DisplayRecipe from "../components/DisplayRecipe";
import { connect } from "react-redux";

function mapStateToProps(state, ownProps) {
  return {
    recipe: state.recipes[ownProps.match.params.id - 1]
  }
}

export default connect(mapStateToProps)(DisplayRecipe);
