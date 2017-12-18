import React, { Component } from "react";


class Computer extends Component {
  
  componentDidMount() {
    
    let myId = this.props.match.params.id;
    this.props.getComputer(myId);


  }
  render() {
    
    return (
      <div> 
      <div>{this.props.computer.brand}</div>
      <div>{this.props.computer.memory}</div>
      <div>{this.props.computer.color}</div>
      <div>{this.props.computer.mouse}</div>
      <div>{this.props.computer.keyboard}</div>
      
      </div>
    );
  }
  
}
export default Computer;
