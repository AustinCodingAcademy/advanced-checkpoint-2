import {combineReducers} from "redux";

function ipads(state = [], action) {
  if (action.type === "IPADS_LOADED") {
    return action.value;
  }
  return state;
}
function ipad(state = {}, action){
  if(action.type === "GET_IPAD_DONE") {
    return action.value;
  }
  return state;
}


const rootReducer = combineReducers({
  ipads, ipad
});
export default rootReducer;
