import ListRecipes from "../components/ListRecipes";
import { connect } from "react-redux";
import { deleteRecipe } from "../actions/index";

function mapStateToProps(state) {
  return {
    redirect: state.redirect.toAdd,
    recipes: state.recipes.filter(recipe => recipe._deleted === false)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteRecipe: function(id) {
      let action = deleteRecipe(id);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListRecipes);
