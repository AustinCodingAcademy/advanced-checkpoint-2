import {combineReducers} from "redux";

function entries(state = [], action) {
  if (action.type === "ENTRIES_LOADED") {
    return action.value;
  }
  return state;
}

function entry(state={}, action) {
  if (action.type === "ENTRY_LOADED") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  entries, entry
});
export default rootReducer;
