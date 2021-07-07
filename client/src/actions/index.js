


export function loadUsers() {
  return function (dispatch) {
    fetch("http://localhost:3001/users").then( (response) => {
      return response.json();
    }).then((users) => {
      dispatch(usersLoaded(users));
    });
  };
}
      
export function usersLoaded(users) {
  return {
    type: "USERS_LOADED",
    value: users
  };
}

export function showUser(id) {
  return function (dispatch) {
    fetch("/user/" + id).then((response) => {
      return response.json();
    }).then(() => {
      dispatch(loadUsers());
    });
  };
}
  
  
export function createUser(user) {
  return function (dispatch) {
    fetch("http://localhost:3001/user", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(user)
    }).then(() => {
      dispatch(loadUsers());
    });
  };
}


      
export function deleteUser(id) {
  return function (dispatch) {
    fetch("/user/" + id, {
      method: "DELETE"
    }).then(res => res.json())
        .then(() => {
          dispatch(loadUsers());
        });
  };
}

      
export function updateUser(id, user) {
  return function (dispatch) {
    fetch("/user/" + id, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(user)
    }).then(res => res.json())
        .then(() => {
          dispatch(loadUsers());
        });
  };
}
  
