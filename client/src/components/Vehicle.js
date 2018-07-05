import React, { Component } from "react";

class Vehicle extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.loadVehicle(id);
  }

  render() {
    return (
      <div>
        <p>Vehicle Year: {this.props.vehicle.year}</p>
        <p>Vehicle Make: {this.props.vehicle.make}</p>
        <p>Vehicle Model: {this.props.vehicle.model}</p>
        <p>Vehicle Price: {this.props.vehicle.price}</p>
        <p>Vehicle Color: {this.props.vehicle.color}</p>
        <p>Vehicle Miles: {this.props.vehicle.miles}</p>
        <p>Vehicle Fuel: {this.props.vehicle.fuel}</p>
      </div>
    );
  }
}

export default Vehicle;
