import React from "react";

function RobotListItem(props) {
  return (
    <div className="robotDiv">
      <h1 className="robotName">{props.name}</h1>
      <div className="robotInner--listView">
        <p className="robotMovie">{props.movie}</p>
      </div>
      <div className="robotActions">
        <a className="robotBtn" href={`/robots/${props.id}`}>detail view</a>

        <button 
          className="robotBtn robotBtnDelete"
          onClick={(e) => {
            // console.log(props.deleteRobot(props.id));
            props.deleteRobot(props.id);
          }}>
            &times; delete
          </button>
      </div>
    </div>
  );
}

export default RobotListItem;