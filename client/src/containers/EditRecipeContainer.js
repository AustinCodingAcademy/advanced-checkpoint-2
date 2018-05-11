import EditRecipe from "../components/EditRecipe";
import { connect } from "react-redux";

function mapStateToProps(state, ownProps) {
  return {
    recipe: state.recipes[ownProps.match.params.id - 1]
  }
}

export default connect(mapStateToProps)(EditRecipe);
