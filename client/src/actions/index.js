export function loadUsers() {
  return function (dispatch) {
    fetch("/users")
    .then( (response) => {
      return response.json();
    }).then((users) => {
      dispatch(usersLoaded(users));
    });
  };
}
function usersLoaded(users) {
  return {
    type: "USERS_LOADED",
    value: users
  };
}

export function createUser() {
  return function (dispatch) {
    fetch("/users", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify()
    }).then(() => dispatch(loadUsers()));
  };
}

export function getUser(id) {
  return function (dispatch) {
    fetch(`/users/${id}`)
    .then( (response) => {
      return response.json();
    }).then((user) => {
      dispatch(getUserDone(user));
    });
  };
}
function getUserDone(user) {
  return {
    type: "GET_USER_DONE",
    value: user
  };
}

export function deleteUser(id) {
  return function (dispatch) {
    fetch(`/users/${id}`, {
      method: "DELETE"
    }).then(() => dispatch(loadUsers()));
  };
}
