import React from "react";
import AddRecipeContainer from "../containers/AddRecipeContainer";
import ErrorPage from "./ErrorPage";

let recipe = {
  id: 0,
  title: '',
  slug: '',
  thumbnail: { url: '', file: {}, name: '', set: false },
  ingredients: [],
  servings: 0,
  time: { prep: 0, cook: 0, total: 0, formatted: {
    prep: '0 min', cook: '0 min', total: '0 min'
  } },
  steps: [],
  date: { created: 0, edited: 0 }, 
  _deleted: false
}

class EditRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.initialMatch = this.props.recipe.slug === this.props.match.params.slug;
  }

  render() {
    if (this.initialMatch || this.props.recipe.slug === this.props.match.params.slug) {
      if (!this.props.recipe._deleted)
        return <AddRecipeContainer edit={true} state={this.props.recipe} />;
      else
        return <ErrorPage />;
    } else {
      return <ErrorPage />;
    }
  }
}

EditRecipe.defaultProps = { recipe }

export default EditRecipe;