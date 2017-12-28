import React from "react";
import {Link} from "react-router-dom"
import PropTypes from "prop-types";

function ListOfUsers(props){

  const userDivs = props.users.map(function(user, id){
    return (
    <div key={id}>
      <ul>
        <li>{user.name}</li>
        <li>{user.age}</li>
        <li>{user.gender}</li>
      </ul>
      <Link to={"/users/" + user._id}>View</Link>
    <button onClick={(e) => props.deleteUser(user._id)}>Delete</button>
    </div>
  )
})

  return (
  <div>
    <h2>List of Users</h2>
    {userDivs}
  </div>
)
}

export default ListOfUsers;


ListOfUsers.PropTypes = {
  users: PropTypes.array.isRequired
};
