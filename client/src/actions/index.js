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

export function getGoat(id) {
  return function (dispatch) {
    fetch("/goats/" + id)
    .then( (response) => {
      return response.json();
    }).then((goat) => {
      dispatch(getGoatDone(goat));
    });
  };
}

function getGoatDone(goat) {
  return {
    type: "GET_GOAT_DONE",
    value: goat
  };
}

export function deleteGoat(id) {
  return function (dispatch) {
    fetch("/goats/" + id, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    }).then(() => {
      dispatch(goatDeleted());
      dispatch(loadGoats());
    });
  };
}

function goatDeleted(goat) {
  return {
    type: "GOAT_DELETED",
    value: goat
  };
}
