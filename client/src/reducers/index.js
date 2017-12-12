import {combineReducers} from "redux";

function albums(state = [], action) { 
  if (action.type === "ALBUMS_LOADED"){
    return action.value;
  }
  return state;
}


const rootReducer = combineReducers({albums});
export default rootReducer;
