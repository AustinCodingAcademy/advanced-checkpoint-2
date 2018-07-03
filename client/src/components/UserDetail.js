import React from "react";


function UserDetail(props) {
  console.log(props);
  const userId = props.match.params.id;
  
  const user = props.users.find(u => u._id == userId) || {};
  
  return (   
    
    <div>
    {console.log(props)}
    {console.log("userId: ", userId)}
    {console.log("user: ", user)}
      <h3>{user.firstName} {user.lastName}</h3>
      <h4>{user.phone}</h4>
      <p>{user.birthday}</p>
      <p>{user.state}</p>
    </div>
  );
}
export default UserDetail