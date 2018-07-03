import React from "react";
import {Link} from "react-router-dom";

const Users = (props) => {
  
  const userDivs = props.users.map((user,i) => {
   
    return (
      
      <div key={i}>
        {user.firstName} - {user.lastName} - {user.state}
       <Link to={"/user/" + user._id}><button>View</button> </Link>
        <button>Delete</button>
      </div>);
  });
  return (   
    <div>{userDivs}</div>
  );
}

export default Users