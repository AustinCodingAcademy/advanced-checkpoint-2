export function loadApplications() {
    return function (dispatch) {
      fetch("/applications")
      .then( (response) => {
        return response.json();
      }).then((applications) => {
        dispatch(applicationsLoaded(applications));
      });
    };
  }
  function applicationsLoaded(applications) {
    return {
      type: "APPLICATIONS_LOADED",
      value: applications
    };
  }
  
  export function createApplication(a) {
    return function (dispatch) {
      fetch("/applications", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(a)
      }).then(() => dispatch(loadApplications()));
    };
  }
  
  export function getApplication(id) {
    return function (dispatch) {
      fetch(`/applications/${id}`)
      .then( (response) => {
        return response.json();
      }).then((application) => {
        dispatch(getApplicationDone(application));
      });
    };
  }
  function getApplicationDone(application) {
    return {
      type: "GET_APPLICATION_DONE",
      value: application
    };
  }
  export function removeApplication(id) {
    return function (dispatch) {
      fetch("/applications/" + id, {
        method: "DELETE"
      }).then( () => {
        dispatch(applicationDeleted());
        dispatch(loadApplications());
    });
  };
}

  function applicationDeleted (application) {
    return {
      type: "APPLICATION_DELETED",
      value: application
    }; 
  }