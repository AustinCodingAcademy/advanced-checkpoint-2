import {combineReducers} from "redux";

function someThing(state = "", action) {
  return state;
}

function games(state = [], action) {
  return state;
}


const rootReducer = combineReducers({
  someThing, games
});

export default rootReducer;
