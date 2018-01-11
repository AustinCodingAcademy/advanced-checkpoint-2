
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Countries (props) {
    let countryDivs = props.countries.map((country, i) => {
        return (
            <div key={i}>
                {country.continent} {country.capital} {country.leader}
                <button onClick={() => 
                props.deleteCountry(country._id)}>Delete</button>
                <Link to={"/countries/" + country._id}>View Details</Link>
            </div>);
        });
        return (
            <div>
                {countryDivs}
            </div>
    );
}

Countries.propTypes = {
    countries: PropTypes.array
};

export default Countries;