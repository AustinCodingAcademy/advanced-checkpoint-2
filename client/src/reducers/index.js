import {combineReducers} from "redux";

function robots(state = {
    robots: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) { 
    
    switch (action.type) {
      case "FETCH_ROBOTS": {
        return {...state, fetching: true}
      }
      case "FETCH_ROBOTS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_ROBOTS_FULFILLED": {
        const newState = {...state, fetching: false, fetched: true, robots: action.payload };
        // console.log(newState);
        return newState;
      }
      default: {
        return state;
      }
    }
}

function robot(state = {
    robot: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) { 
    
    switch (action.type) {
      case "FETCH_ROBOT": {
        return {...state, fetching: true}
      }
      case "FETCH_ROBOT_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_ROBOT_FULFILLED": {
        const newState = {...state, fetching: false, fetched: true, robot: action.payload };
        // console.log(newState);
        return newState;
      }
      case "DELETE_ROBOT": {
        return action.id;
      }
      default: {
        return state;
      }
    }
}

const rootReducer = combineReducers({
  robots,
  robot
});
export default rootReducer;
