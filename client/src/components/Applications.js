import React from "react";
import { Link } from "react-router-dom";

function Appliations(props) {

      let userDivs = props.applications.map((d,i) => {
        return (
          <div key={i}>
            {d.name}&nbsp;
            {d.dob}&nbsp;
            {d.experience}&nbsp; 
            {d.university}&nbsp; 
            {d.location}&nbsp;
            <Link to={"/application/" + d._id}> View </Link>&nbsp;
            <button
              onClick={ () => props.removeApplication(d._id) } 
            > Delete </button>
          </div>
        );
      });

    return (
      <div>
        <h2>Appliations</h2>
        {userDivs}
      </div>
    );
  }

export default Appliations;