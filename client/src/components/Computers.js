import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Computers (props) {
    let computerDivs = props.computers.map((computer, i) => {
        return (
        <div key={i}>
        {computer.brand} {computer.memory} {computer.color}
        
        <button onClick={() => props.deleteComputer(computer._id)}>Delete</button>
        <Link to={"/computers/" + computer._id}>View</Link>
        </div>);
    });
    return (
        <div>
            {computerDivs}
        </div>
    );
}

Computers.propTypes = {
    computers: PropTypes.array
  };

export default Computers;