export function loadGoats() {
  return function (dispatch) {
    fetch("/goats").then((res) => {
      return response.json();
    }).then((goats) => {
      dispatch(goatsLoaded(goats));
    });
  };
}

export function goatsLoaded(goats) {
  return {
    type: "GOATS_LOADED",
    value: goats
  }
}

export function createGoat(g) {
  return function (dispatch) {
    fetch("/goats", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(g)
    }).then(() => dispatch(loadGoats()));
  };
}
