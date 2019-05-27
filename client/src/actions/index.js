
export function loadCountries() {
    return function (dispatch) {
      fetch("/countries")
          .then((response) => {
            return response.json();
          }).then((countries) => {
            dispatch(countriesLoaded(countries));
          });
    };
  }
  
  function countriesLoaded(countries) {
    return {
      type: "COUNTRIES_LOADED",
      value: countries
    };
  }
  
  export function addCountry(c) {
      return function (dispatch) {
          fetch("/countries", {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify(c)
          }).then(() => dispatch(loadCountries()));
      };
  }
  
  export function getCountry(id) {
      return function (dispatch) {
          fetch("/countries/" + id)
          .then((response) => {
              return response.json();
          }).then((country) => {
              dispatch(getCountryDone(country));
          });
      };
  }
  
  function getCountryDone(country) {
      return {
          type: "GET_COUNTRY_DONE",
          value: country
      };
  }
  
  export function deleteCountry(id) {
      return function (dispatch) {
          fetch("/countries/" + id, {
              method: "DELETE",
              headers: {"Content-Type": "application/json"}
          }).then(() => {
              dispatch(countryDeleted());
              dispatch(loadCountries());
          });
      };
  }
  
  function countryDeleted(country) {
      return {
          type: "COUNTRY_DELETED",
          value: country
      }
  }
