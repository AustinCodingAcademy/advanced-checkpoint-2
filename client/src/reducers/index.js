import {combineReducers} from "redux";

function vehicles(state = [], action) {
  if (action.type === "VEHICLES_LOADED") {
    return action.value;
  }
  return state;
}
function vehicle(state = {}, action){
  if(action.type === "GET_VEHICLE_DONE") {
    return action.value;
  }
  return state;
}


const rootReducer = combineReducers({
  vehicles, vehicle
});
export default rootReducer;
