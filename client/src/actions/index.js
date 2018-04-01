export function loadEntries() {
    return function (dispatch) {
      fetch("/entries")
      .then( (response) => {
        return response.json();
      }).catch(err => {console.log(err)})
      .then((list) => dispatch(entriesLoaded(list))
      ).catch(err => {console.log(err)})
    };
  }
  function entriesLoaded(list) {
    return {
      type: "ENTRIES_LOADED",
      value: list
    };
  }

export function createEntry(entry) {
  return function (dispatch) {
    fetch("/entries", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(entry)
    }).then(() => dispatch(loadEntries()));
  };
}

export function loadEntry(id) {
  return function (dispatch) {
    fetch(`/entry/${id}`)
    .then( res => res.json() )
    .then( ent => dispatch(entryLoaded(ent)))
    .catch(err => {console.log(err)})
  }
}
function entryLoaded(ent) {
  return {
    type: "ENTRY_LOADED",
    value: ent
  }
}

export function deleteEntry(id) {
  return function (dispatch) {
    fetch(`/entry/${id}`, {
      method: "delete"
    })
    .then( res => {dispatch(loadEntries())})
    .catch(err => console.log(err));
  }
}

export function updateEntry(id, entry) {
  return function (dispatch) {
    fetch(`/entry/${id}`, {
      method: "put",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(entry)
    })
    .then( res => dispatch(loadEntries()))
    .catch(err => console.log(err));
  }
}