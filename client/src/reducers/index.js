import {combineReducers} from "redux";

function cars(state = [], action) { 
  if (action.type === "CARS_LOADED") {
    return action.value;
  }
  return state;
}

function car(state = [], action) {
  if (action.type === "GET_CAR_DONE") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  cars, car
});
export default rootReducer;
