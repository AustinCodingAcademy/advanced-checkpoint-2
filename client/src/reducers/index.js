import {combineReducers} from "redux";

function questions(state = [], action) {
  if (action.type === "QUESTIONS_LOADED") {
    return action.value;
  }
  return state;
}


function question(state = [], action) {
  if (action.type === "GET_QUESTIONS_DONE") {
    return action.value;
  }
  return state;
}

function searchText(state="", action){
  if(action.type === "SET_SEARCH_TEXT"){
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  questions,question,searchText
});
export default rootReducer;
