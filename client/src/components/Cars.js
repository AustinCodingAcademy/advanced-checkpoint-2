import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Cars (props) {
    let carDivs = props.cars.map((car, i) => {
        return (
            <div key={i}>
                {car.make} {car.model} {car.engine}
                <button onClick={() => 
                props.deleteCar(car._id)}>Delete</button>
                <Link to={"/cars/" + car._id}>View</Link>
            </div>);
        });
        return (
            <div>
                {carDivs}
            </div>
    );
}

Cars.propTypes = {
    cars: PropTypes.array
};

export default Cars;