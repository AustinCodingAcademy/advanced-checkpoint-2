import React from "react";
import ApplicationsContainer from "../containers/ApplicationsContainer";
import CreateThingsContainer from "../containers/CreateThingsContainer";

function Applications() {
  return (
    <div>
      <div style={{float: "left", width: "49%"}}>
        <h1>Applications </h1>
        <ApplicationsContainer />
      </div>
      <div style={{float: "left", width: "49%"}}>
        <CreateThingsContainer />
      </div>
    </div>
  );
}
export default Applications;
