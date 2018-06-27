export function fetchUsers() {
    return function (dispatch) {
        
        fetch("http://localhost:3001/users")
        .then( (response) => {
          return response.json();
        }).then((users) => {
          dispatch(usersFetched(users));
        });
  
    };
  }
  
  export function usersFetched(users) {
    return {
      type: "USERS_FETCHED",
      value: users
    };
  }

  export function createUser(user) {
    return function (dispatch) {
          
      fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      }
   )
          .then( (response) => {
            return response.json();
          }).then(() => {
            dispatch(fetchUsers());
          });
    
    };
  }

  export function deleteUser(id) {
    return function (dispatch) {
          
      fetch(`http://localhost:4000/users/${id}`, {
        method: "DELETE"
      }
   )
          .then( (response) => {
            return response.json();
          }).then(() => {
            dispatch(fetchUsers());
          });
    
    };
  
  }
    