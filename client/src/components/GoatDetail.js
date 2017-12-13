import React from "react";

function GoatDetail(props) {
  return (
    <div>
      <h1>Goat: </h1>
      <p>Eye shape: {props.goat.eye}</p>
      <p>Goat color: {props.goat.color}</p>
      <p>Age: {props.goat.age}</p>
      <p>Type: {props.goat.type}</p>
      <p>Does yoga? {props.goat.yoga}</p>
    </div>
  );
}

export default GoatDetail;
