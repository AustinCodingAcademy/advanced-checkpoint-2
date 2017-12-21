import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function ListOfVehicles (props){
  let vehicleList = props.vehicles.map((v,i)=>{
    return (
      <div key={i}>
        <h3>{v.year} {v.make} {v.model}</h3>
        <Link to={"/vehicle/" + v._id}> View </Link>
      </div>
    )
  })

  return (
    <div>
      <h1>Vehicles</h1>
      {vehicleList}
    </div>
  )
}

export default ListOfVehicles;

ListOfVehicles.PropTypes = {
  vehicles: PropTypes.array.isRequired
}
