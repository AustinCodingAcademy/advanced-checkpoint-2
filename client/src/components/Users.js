import React from "react";
import {Link} from "react-router-dom";

function Users(props) {
  const userDivs = props.users.map((user,i) => {
    return (
      <div key={i}>
        {user.firstName} - {user.lastName} - {user.state}
        <Link to={"/user/" + user.id}> View</Link>
        <button>Delete</button>
      </div>);
  });
  return (   
    <div>{userDivs}</div>
  );
}

export default Users