import React, { Component } from 'react';
import {Link} from "react-router-dom";


class VehicleDetail extends Component {

  componentDidMount(props){
    let id = this.props.match.params.id;
    this.props.getVehicle(id);
  }

  render() {
    console.log(this.props)
    let id = this.props.match.params.id;
    return(
      <div>
        <h2>Whip for sale:</h2>
        <h3>{this.props.vehicle.year} {this.props.vehicle.make} {this.props.vehicle.model}</h3>
        <p>Color: {this.props.vehicle.color}</p>
        <p>Price: {this.props.vehicle.price}</p>
        <Link to={"/deletedvehicle"}>
          <button onClick={()=>{
            this.props.deleteVehicle(id);
          }} >DELETE</button>
        </Link>
        <Link to={`/updatevehicle/${id}`}>
          <button>EDIT</button>
        </Link>
      </div>
    );
  }
}

export default VehicleDetail;
