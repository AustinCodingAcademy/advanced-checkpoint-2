export function loadCars() {
  return function (dispatch) {
    fetch("/cars")
        .then((response) => {
          return response.json();
        }).then((cars) => {
          dispatch(carsLoaded(cars));
        });
  };
}

function carsLoaded(cars) {
  return {
    type: "CARS_LOADED",
    value: cars
  };
}

export function addCar(c) {
    return function (dispatch) {
        fetch("/cars", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(c)
        }).then(() => dispatch(loadCars()));
    };
}

export function getCar(id) {
    return function (dispatch) {
        fetch("/cars/" + id)
        .then((response) => {
            return response.json();
        }).then((car) => {
            dispatch(getCarDone(car));
        });
    };
}

function getCarDone(car) {
    return {
        type: "GET_CAR_DONE",
        value: car
    };
}

export function deleteCar(id) {
    return function (dispatch) {
        fetch("/cars/" + id, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        }).then(() => {
            dispatch(carDeleted());
            dispatch(loadCars());
        });
    };
}

function carDeleted(car) {
    return {
        type: "CAR_DELETED",
        value: car
    }
}