import {combineReducers} from "redux";

function someThing(state = "", action) { 
  return state;
}
function garments(state = "", action) { 
  return state;
}

const rootReducer = combineReducers({
  someThing,garments
});
export default rootReducer;
