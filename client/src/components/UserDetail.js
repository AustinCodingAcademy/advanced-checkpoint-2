import React from "react";

function UserDetail(props){
  /*const props = {dog:[{
  name: "Buster",
  age: 3,
  breed: "doggie"
}]}*/
  const dogDivs = props.dog.map(function(dog)){
    return <div>{dog.name} - {dog.age} - {dog.breed}</div>;
  });
  return (
  <div>
    {dogDivs}
  </div>);
}
export default UserDetail;
