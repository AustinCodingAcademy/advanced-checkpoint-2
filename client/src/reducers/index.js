import { combineReducers } from "redux";

function stocks(state = [], action) {
  if (action.type === "STOCKS_LOADED") {
    return action.value;
  }
  if (action.type === "STOCK_CREATED") {
    return [...state, action.value];
  }
  if (action.type === "STOCK_DELETED") {
    return state.filter((s) => s.ticker !== action.value);
  }
  return state;
}

function prices(state = [], action) {
  if (action.type === "PRICES_LOADED") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  stocks,
  prices
});

export default rootReducer;
