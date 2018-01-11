import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function ListOfIpads (props){
  let ipadList = props.ipad.map((p,i)=>{
    return (
      <div key={i}>
        <h3>{p.model} {p.memory}</h3>
        <Link to={"/ipad/" + p._id}> View </Link>
      </div>
    )
  })

  return (
    <div>
      <h1>Ipads</h1>
      {ipadList}
    </div>
  )
}

export default ListOfIpads;

ListOfIpads.PropTypes = {
  ipads: PropTypes.array.isRequired
}
