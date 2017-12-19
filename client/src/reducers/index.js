import {combineReducers} from "redux";

function applications(state = [], action) {
  if (action.type === "APPLICATIONS_LOADED") {
    return action.value;
  }
  return state;
}
function application(state = {}, action) {
  if (action.type === "GET_APPLICATION_DONE") {
    return action.value;
  }
  return state;
}


const rootReducer = combineReducers({
  application, applications
});
export default rootReducer;
