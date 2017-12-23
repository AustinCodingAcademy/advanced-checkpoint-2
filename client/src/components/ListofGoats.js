import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

function ListofGoats(props) {
  let goatDivs = props.goats.map((g, i) => {
    return (
      <div key={i}>
        <h2>Goat: {g._id}</h2>
        <ul>
          <li>Eye shape: {g.eye}</li>
          <li>Goat color: {g.color}</li>
          <li>Age: {g.age}</li>
        </ul>
        <Link to={"/goats/" + g._id}>View</Link>
        <button onClick={() => props.deleteGoat(g._id)}>Delete</button>
      </div>
    );
  });

  return (
    <div>
      <h1>A List of All Goats</h1>
      {goatDivs}
    </div>
  );
}

ListofGoats.PropTypes = {
  goats: PropTypes.array.isRequired
};

export default ListofGoats;
