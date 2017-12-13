import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

function ListofGoats(props) {
  let goatDivs = props.goats.map((g, i) => {
    return (
      <div key={i}>
        {g[props.field]}
        {g[props.field1]}
        {g[props.field2]}
        <Link to={"/" + props.path + "/" + g._id}>View</Link>
        <button>Delete</button>
      </div>
    );
  });

  return (
    <div>{goatDivs}</div>
  );
}

ListofGoats.PropTypes = {
  goats: PropTypes.array.isRequired
};

export default ListofGoats;
