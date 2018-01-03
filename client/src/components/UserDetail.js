import React from "react";

function UserDetail(props){
  /*const props = {user:[{
  name: "Buster",
  age: 3,
  breed: "usergie"
}]}*/
  const userDivs = props.users.map(function(user){
    return
    <div><ul>
      <ol>{this.props.user.name}</ol>
      <ol>{this.props.user.age}</ol>
      <ol>{this.props.user.gender}</ol>
      <ol>{this.props.user.birthday}</ol>
      <ol>{this.props.user.nationality}</ol>
    </ul></div>;
  });
  return (
  <div>
    {userDivs}
  </div>);
}
export default UserDetail;
