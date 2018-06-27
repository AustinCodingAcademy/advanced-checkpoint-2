import {combineReducers} from "redux";



function users(state = [], action) {
  if (action.type === "USERS_FETCHED") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  users
});
export default rootReducer;
