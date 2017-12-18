export function loadComputers() {
    return function (dispatch) {
      fetch("/computers")
      .then( (response) => {
        return response.json();
      }).then((computers) => {
        dispatch(computersLoaded(computers));
      });
    };
  }
  function computersLoaded(computers) {
    return {
      type: "COMPUTERS_LOADED",
      value: computers
    };
  }

  export function createComputer(c) {
    return function (dispatch) {
      fetch("/computers", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(c)
      }).then(() => dispatch(loadComputers()));
    };
  }


  export function getComputer(id) {
    return function (dispatch) {
      fetch("/computers/" + id)
      .then( (response) => {
        return response.json();
      }).then((computer) => {
        dispatch(getComputerDone(computer));
      });
    };
  }
  
  function getComputerDone(computer) {
    return {
      type: "GET_COMPUTER_DONE",
      value: computer
    };
  }

  export function deleteComputer(id) {
    return function (dispatch) {
      fetch("/computers/" + id, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
      }).then(() => {
        dispatch(computerDeleted());
        dispatch(loadComputers());
      });
    };
  }
  
  function computerDeleted(computer) {
    return {
      type: "COMPUTER_DELETED",
      value: computer
    };
  }