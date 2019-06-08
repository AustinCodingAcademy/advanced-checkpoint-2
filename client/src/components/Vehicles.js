import React from "react";
import CollapsibleMapper from "./CollapsibleMapper";

function Vehicles(props) {
  return (
    <CollapsibleMapper data={props.vehicles} field="year" field1="make" 
      field2="model" />
  );
}
export default Vehicles;
