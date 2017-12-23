export function loadGames() {
  return function (dispatch) {
    fetch("/games")
      .then(response => {
        return response.json();
      })
      .then(games => {
        dispatch(gamesLoaded(games));
      });
  };
}
function gamesLoaded(games) {
  return {
    type: "GAMES_LOADED",
    value: games
  };
}

export function createGame(c) {
  return function (dispatch) {
    fetch("/games", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(c)
    }).then(() => dispatch(loadGames()));
  };
}

// id actions

export function getGame(id) {
  return function (dispatch) {
    fetch("/games/" + id)
      .then(response => {
        return response.json();
      })
      .then(game => {
        dispatch(getGameDone(game));
      });
  };
}

function getGameDone(game) {
  return {
    type: "GET_GAME_DONE",
    value: game
  };
}

export function deleteGame(id) {
  return function (dispatch) {
    fetch("/games/" + id, {
      method: "DELETE",
      body: JSON.stringify(id)
    })
      .then(response => {
        return response.json();
      })
      .then(() => dispatch(loadGames()));
  };
}
