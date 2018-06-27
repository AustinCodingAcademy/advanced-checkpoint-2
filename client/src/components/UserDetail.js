import React from "react";


function UserDetail(props) {
  const userId = props.match.params.id;
  const user = props.users.find(u => u.id == userId) || {};
  return (   
    <div>
      <h3>{user.firstName} {user.lastName}</h3>
      <h4>{user.phone}</h4>
      <p>{user.birthday}</p>
      <p>{user.state}</p>
    </div>
  );
}
export default UserDetail