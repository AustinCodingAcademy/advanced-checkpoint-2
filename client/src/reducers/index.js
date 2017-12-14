import { combineReducers } from "redux";

function games(state = [], action) {
  if (action.type === "GAMES_LOADED") {
    return action.value;
  }
  return state;
}

// new stuff

function game(state = [], action) {
  if (action.type === "GET_GAME_DONE") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  games,
  game
});
export default rootReducer;
