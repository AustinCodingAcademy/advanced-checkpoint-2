import React, { Component } from "react";
import {Link} from "react-router-dom";

class CollapsableMapper extends Component {
  constructor() {
    super();
    //this.state = {visible: true};
  }
  render() {
    //let buttonText = "Hide";
    let userDivs = "";
    //if (this.state.visible) {
      //buttonText = "Hide";
      console.log("CollapsableMapper this.props:",this.props);
      //console.log("CollapsableMapper this.props.path:",this.props.path);
      console.log("CollapsableMapper this.props.field:",this.props.field);
      console.log("CollapsableMapper this.props.field1:",this.props.field1);
      console.log("CollapsableMapper this.props.data[0]:",this.props.data[0]);
      userDivs = this.props.data.map((d,i) => {
        return (
          <div key={i}>
            {d[this.props.field]}
            {d[this.props.field1]}
            {d[this.props.field2]}
            {d[this.props.field3]}
            <Link to={"/" + this.props.path + "/" + d._id}> View </Link>
          </div>
        );
      });
    //} else {
      //buttonText = "Show";
      //userDivs = "";
    //}
    return (
      <div>
        {userDivs}
      </div>);
  }
}


export default CollapsableMapper;
