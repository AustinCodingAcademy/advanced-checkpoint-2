import {combineReducers} from "redux";

function computers(state = [], action) {
  if (action.type === "COMPUTERS_LOADED") {
    return action.value;
  }
  return state;
}


function computer(state = [], action) {
  if (action.type === "GET_COMPUTER_DONE") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  computers, computer
});
export default rootReducer;
