import {combineReducers} from "redux";

function someThing(state = "", action) {
  return state;
}

//reducer for the state of users. It is needed to get the information out of the state
function user(state = [], action) {
  return state;
}

const rootReducer = combineReducers({
  someThing, user
});
export default rootReducer;
