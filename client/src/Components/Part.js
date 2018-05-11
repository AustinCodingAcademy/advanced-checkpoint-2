import React, { Component } from "react";



class Part extends Component {

    componentDidMount() {
      let id = this.props.match.params.id;
      this.props.getPart(id);
    }

    render() {
      console.log(this.props.part);
      console.log(this.props.match.params.id);
      return (
        <div>
          <div><b>ID:</b> {this.props.part._id}</div>
          <div><b>Location: </b> {this.props.part.location}</div>
        </div>
      );
    }
  }
export default Part;
