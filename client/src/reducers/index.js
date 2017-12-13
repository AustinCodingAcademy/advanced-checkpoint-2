import {combineReducers} from "redux";

function someThing(state = "") {
  return state;
}

function goats(state = [], action) {
  if (action.type === "GOATS_LOADED") {
    return action.value;
  }
  return state
}

const rootReducer = combineReducers({
  someThing
});
export default rootReducer;
