import React from "react";
import {Link} from "react-router-dom";

function DeletedIpad(){
  return(
    <div>
      <h3>Ipad Deleted!</h3>
      <Link to={"/listofipads"}>Return to list of ipads</Link>
    </div>
  )
}

export default DeletedIpad;
