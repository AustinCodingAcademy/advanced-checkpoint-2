import React from "react";

function ListOfUsers(props){

  const userDivs = props.user.map(function(user, id){
    return <div key={id}>{user.name} - {user.age} - {user.gender}</div>;
  });
  return (
  <div>
    {userDivs}
  </div>
);
}
export default ListOfUsers;
