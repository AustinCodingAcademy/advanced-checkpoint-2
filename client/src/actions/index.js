export function loadIpads() {
  return function (dispatch) {
    fetch("/ipads")
    .then((response)=>{
      return response.json();
    }).then((ipads)=>{
      dispatch(ipadsLoaded(ipads));
    });
  };
}
function ipadsLoaded(ipads){
  return{
    type: "IPADS_LOADED",
    value: ipads
  };
}
export function createIpad(p) {
  return function (dispatch) {
    fetch("/ipads", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(p)
    }).then(() => dispatch(loadIpads()));
  };
}
export function getIpad(id){
  return function (dispatch) {
    fetch(`/ipads/${id}`)
    .then((response) => {
      return response.json()
    }).then((ipad) => {
      dispatch(getIpadDone(ipad));
    });
  };
};
function getIpadDone(ipad){
  return {
    type: "GET_IPAD_DONE",
    value: ipad
  }
};
export function deleteIpad(id){
  return function (dispatch) {
    fetch(`/ipads/${id}`,{
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    }).then(() => dispatch(loadIpads()));
  }
}
