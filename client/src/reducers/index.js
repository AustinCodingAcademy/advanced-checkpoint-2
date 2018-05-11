import { combineReducers } from "redux";

function redirect(state = { toRecipe: false, toAdd: false }, action) {
  if (action.type === 'REDIRECT') {
    if (action.to === '/recipe') {
      if (action.reset === true)
        return { toRecipe: false, toAdd: state.toAdd }
      else
        return { toRecipe: true, toAdd: state.toAdd }
    } else if (action.to === '/add') {
      if (action.reset === true)
        return { toRecipe: state.toRecipe, toAdd: false }
      else
        return { toRecipe: state.toRecipe, toAdd: true }
    }
  } else {
    return state;
  }
}

function recipes(state = [], action) {
  switch (action.type) {
    case 'RECIPES_LOADED':
      return action.value;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  redirect,
  recipes
});

export default rootReducer;
