import React, { Component } from "react";



class Missing extends Component {

    componentDidMount() {
      let id = this.props.match.params.id;
      this.props.getMissing(id);
    }

    render() {
      console.log(this.props.part);
      console.log(this.props.match.params.id);
      return (
        <div>
          <div><b>ID:</b> {this.props.part._id}</div>
          <div><b>Location: </b> {this.props.part.location}</div>
          {/* <div><b>Item:</b> {this.props.part.item}</div>
          <div><b>Condition:</b> {this.props.part.condition}</div>
          <div><b>Price:</b> {this.props.part.price}</div>
          <div><b>Seller:</b> {this.props.part.seller}</div> */}
        </div>
      );
    }
  }
export default Missing;
