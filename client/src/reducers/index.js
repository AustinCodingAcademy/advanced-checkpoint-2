import { combineReducers } from "redux";

function stocks(state = []) {
  return state;
}

const rootReducer = combineReducers({
  stocks,
});

export default rootReducer;
