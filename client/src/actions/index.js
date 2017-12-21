export function loadVehicles() {
  return function (dispatch) {
    fetch("/vehicles")
    .then((response)=>{
      return response.json();
    }).then((vehicles)=>{
      dispatch(vehiclesLoaded(vehicles));
    });
  };
}
function vehiclesLoaded(vehicles){
  return{
    type: "VEHICLES_LOADED",
    value: vehicles
  };
}
export function createVehicle(v) {
  return function (dispatch) {
    fetch("/vehicles", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(v)
    }).then(() => dispatch(loadVehicles()));
  };
}
export function getVehicle(id){
  return function (dispatch) {
    fetch(`/vehicles/${id}`)
    .then((response) => {
      return response.json()
    }).then((vehicle) => {
      dispatch(getVehicleDone(vehicle));
    });
  };
};
function getVehicleDone(vehicle){
  return {
    type: "GET_VEHICLE_DONE",
    value: vehicle
  }
};
export function deleteVehicle(id){
  return function (dispatch) {
    fetch(`/vehicles/${id}`,{
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    }).then(() => dispatch(loadVehicles()));
  }
}
export function updateVehicle(vehicle){
  return function (dispatch) {
    fetch(`/vehicles/${vehicle._id}`,{
      method: "PUT",
      headers: {"Content-Type": "application/json"}
    }).then(() => dispatch(loadVehicles()));
  }
}
