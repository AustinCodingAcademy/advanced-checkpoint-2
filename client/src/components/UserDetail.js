import React from "react";


function UserDetail(props) {
  
  const userId = props.match.params.id;
  
  const user = props.users.find(u => u._id === userId) || {};
  
  return (   
    
    <div>
    
      <h3>Name: {user.firstName} {user.lastName}</h3>
      <h4>Phone: {user.phone}</h4>
      <p>Birthday: {user.birthday}</p>
      <p>State: {user.state}</p>
    </div>
  );
}
export default UserDetail