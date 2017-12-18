import React from "react";
import ComputersContainer from "./ComputersContainer";
import CreateThingsContainer from "./CreateThingsContainer";

function Main() {
  return (
    <div>
      <div style={{float: "left", width: "49%"}}>
        <h1>Computers</h1>
        <ComputersContainer />
      </div>
      <div style={{float: "left", width: "49%"}}>
        <CreateThingsContainer />
      </div>
    </div>
  );
}
export default Main;