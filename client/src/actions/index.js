export function fetchRobots() {
  return function(dispatch) {
    dispatch({type: "FETCH_ROBOTS"});
    
    fetch("/robots")
      .then((response) => {
        return response.json();
      }).then((robots) => {
        // console.log(response.data);
        dispatch({type: "FETCH_ROBOTS_FULFILLED", payload: robots})
      })
      .catch((err) => {
        dispatch({type: "FETCH_ROBOTS_REJECTED", payload: err})
      })
  }
}

export function fetchRobot(id) {
  return function (dispatch) {
    // console.log('fetch robot id ' + id);
    dispatch({type: "FETCH_ROBOT"});

    fetch("/robots/" + id)
      .then((response) => {
        // console.log(response.data);
        return response.json();
      }).then((robot) => {
        dispatch({type: "FETCH_ROBOT_FULFILLED", payload: robot})
      })
      .catch((err) => {
        dispatch({type: "FETCH_ROBOT_REJECTED", payload: err})
      })
  }
}

export function createRobot(robot) {
  return function (dispatch) {
    fetch("/robots", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(robot)
    }).then(() => dispatch(fetchRobots()));
  };
}

export function deleteRobot(id) {
  console.log('/robots/' + id);

  return function (dispatch) {
    fetch("/robots/" + id, {
      method: "DELETE"
    }).then(response => {
      // response.json();
      dispatch(fetchRobots());
      console.log('deleted');
    });
  }
}
