export function loadStocks() {
  return (dispatch) => {
    dispatch({
      type: "LOAD_STOCKS",
    });
    dispatch(stocksLoaded());
  };
}

export function stocksLoaded() {
  return {
    type: "STOCkS_LOADED",
    value: [],
  };
}

export function createStock(stock) {
  return function (dispatch) {
    console.log("createStock action", stock);
    // fetch("/contacts", {
    //   method: "POST",
    //   body: JSON.stringify(contact),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    // .then((response) => {
    //   return response.json();
    // })
    // .then((newContact) => {
    //   dispatch(contactCreated(newContact));
    // });
  };
}

export function stockCreated(stock) {
  console.log("stock created", stock);
}

export function deleteStock(stock) {
  return function (dispatch) {
    console.log("deleteStock action", stock);
    // fetch("/contacts", {
    //   method: "POST",
    //   body: JSON.stringify(contact),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    // .then((response) => {
    //   return response.json();
    // })
    // .then((newContact) => {
    //   dispatch(contactCreated(newContact));
    // });
  };
}

export function stockDeleted(stock) {
  console.log("stock deleted", stock);
}
