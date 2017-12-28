import React from "react";

function UserDetail(props){
  /*const props = {user:[{
  name: "Buster",
  age: 3,
  breed: "usergie"
}]}*/
  const userDivs = props.users.map(function(user){
    return
    <div>{user.name} - {user.age} - {user.gender}</div>;
  });
  return (
  <div>
    {userDivs}
  </div>);
}
export default UserDetail;
