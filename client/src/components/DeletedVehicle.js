import React from "react";
import {Link} from "react-router-dom";

function DeletedVehicle(){
  return(
    <div>
      <h3>Vehicle Deleted!</h3>
      <Link to={"/listofvehicles"}>Return to list of vehicles</Link>
    </div>
  )
}

export default DeletedVehicle;
