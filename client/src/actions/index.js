export function loadStocks() {
  return (dispatch) => {
    dispatch({
      type: "LOAD_STOCKS"
    });
    dispatch(stocksLoaded());
  };
}

export function stocksLoaded() {
  return {
    type: "STOCkS_LOADED",
    value: []
  };
}
