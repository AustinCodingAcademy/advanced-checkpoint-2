import {combineReducers} from "redux";

function goats(state = [], action) {
  if (action.type === "GOATS_LOADED") {
    return action.value;
  }
  return state
}

function goat(state = {}, action) {
  if (action.type === "GET_GOAT_DONE") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  goats, goat
});
export default rootReducer;
