import AddRecipe from "../components/AddRecipe";
import { addRecipe, editRecipe, redirect } from "../actions";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    id: state.recipes.length + 1,
    redirect: state.redirect.toRecipe
  }
}

function mapDispatchToProps(dispatch) {
  return {
    submitRecipe: function(recipe, edit) {
      let action = () => {};

      if (edit)
        action = editRecipe(recipe);
      else
        action = addRecipe(recipe);

      dispatch(action);
    },
    resetRedirect: function() {
      let action = redirect('/recipe', true);
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe);
