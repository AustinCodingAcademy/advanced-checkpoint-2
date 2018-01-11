
import {combineReducers} from "redux";

function countries(state = [], action) { 
  if (action.type === "COUNTRIES_LOADED") {
    return action.value;
  }
  return state;
}

function country(state = [], action) {
  if (action.type === "GET_COUNTRY_DONE") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  countries, country
});
export default rootReducer;