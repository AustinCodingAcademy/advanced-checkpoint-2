export function loadVehicles() {
  return function (dispatch) {
    dispatch({
      type: "LOAD_VEHICLES"
    });
    fetch("http://localhost:3101/vehicles")
    .then( (response) => {
      return response.json();
    }).then((vehicles) => {
      dispatch(vehiclesLoaded(vehicles));
    });
  };
}
function vehiclesLoaded(vehicles) {
  return {
    type: "VEHICLES_LOADED",
    value: vehicles
  };
}
export function loadVehicle(id) {
  return function (dispatch) {
    dispatch({
      type: "GET_VEHICLE"
    });
    fetch(`http://localhost:3101/vehicle/${id}`)
    .then( (res) => {
      return res.json();
    }).then( (vehicle) => {
      dispatch(vehicleLoaded(vehicle));
    });
  };
}
function vehicleLoaded(vehicle) {
  return {
    type: "GET_VEHICLE_DONE",
    value: vehicle
  };
}
export function createVehicle(v) {
  return function (dispatch) {
    fetch("http://localhost:3101/vehicles", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(v)
    }).then(() => dispatch(loadVehicles()));
  };
}
export function deleteVehicle(id) {
  return function (dispatch) {
    dispatch({
      type: "REMOVE_VEHICLE"
    })
    fetch(`http://localhost:3101/vehicle/${id}`, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
    }).then(() => dispatch(vehicleDeleted()));
  };
}
function vehicleDeleted(vehicle) {
  return {
    type: "VEHICLE_REMOVED",
    value: vehicle
  };
}
