import React from "react";
import VehiclesContainer from "../containers/VehiclesContainer";
import CreateVehicleContainer from "../containers/CreateVehicleContainer";

function Vehicles() {
  return (
    <div>
      <div style={{float: "left", width: "49%"}}>
        <h1>Vehicles</h1>
        <VehiclesContainer />
      </div>
      <div style={{float: "left", width: "49%"}}>
        <CreateVehicleContainer />
      </div>
    </div>
  );
}
export default Vehicles;
