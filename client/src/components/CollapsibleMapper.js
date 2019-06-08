import React, { Component } from "react";
import { Link } from "react-router-dom";
import {deleteVehicle} from "../actions";

class CollapsibleMapper extends Component {
  constructor() {
    super();
    this.state = {
      visible: true
    };
  }


  render() {
    let buttonText = "Hide";
    let userDivs = "";
    if (this.state.visible) {
      buttonText = "Hide";
      userDivs = this.props.data.map((d,i) => {
        return (
          <div key={i}>
            {d[this.props.field]}
            {d[this.props.field1]} 
            {d[this.props.field2]} 
            <Link to={"/vehicle/" + d._id}>View</Link>
            <button onClick={deleteVehicle}>Remove</button>
          </div>
        );
      });
    } else {
      buttonText = "Show";
      userDivs = "";
    }
    return (
      <div>
        <button onClick={() => {
          this.setState({
            visible: !this.state.visible
          });
        }
        }>
          {buttonText}
        </button>
        {userDivs}
      </div>);
  }
}


export default CollapsibleMapper;
