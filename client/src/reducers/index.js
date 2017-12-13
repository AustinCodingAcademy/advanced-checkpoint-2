import {combineReducers} from "redux";

function goats(state = [], action) {
  if (action.type === "GOATS_LOADED") {
    return action.value;
  }
  return state
}

const rootReducer = combineReducers({
  goats
});
export default rootReducer;
