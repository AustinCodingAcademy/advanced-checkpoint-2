export function loadGoats() {
  return function (dispatch) {
    fetch("/goats").then((res) => {
      return res.json();
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

export function deleteGoat(id) {
  return function (dispatch) {
    fetch("/goats/" + id, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    }).then(() => dispatch(loadGoats()));
  };
}
