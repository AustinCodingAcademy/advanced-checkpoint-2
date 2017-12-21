import React, { Component } from 'react';

class VehicleForm extends Component {
  constructor(props){
    super();
    this.state = {
      vehicle: {
        year: "",
        make: "",
        model: "",
        color: "",
        price: ""
      },
      button: ""
    }
  }
  componentDidMount(props){
    if(this.props.createVehicle){
      this.setState({button: "ADD THIS VEHICLE"});
    }
    if(this.props.updateVehicle){
      this.setState({
        vehicle: this.props.vehicle,
        button: "SUBMIT CHANGES"
      });
    }
  }

  render(){
    return(
      <div>
        <h1>Vehicle</h1>
        <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createVehicle) {
              this.props.createVehicle(this.state.vehicle);
            }
            if (this.props.updateVehicle){
              this.props.updateVehicle(this.state.vehicle);
            }
          }}>
            <div>
              Year: <input onChange={(e) => {
                const vehicleYear = {year: e.target.value};
                this.setState({
                  vehicle: Object.assign(this.state.vehicle,vehicleYear)
                });
              }} />
            </div>
            <div>
              Make: <input onChange={(e) => {
                const vehicleMake = {make: e.target.value};
                this.setState({
                  vehicle: Object.assign(this.state.vehicle,vehicleMake)
                });
              }} />
            </div>
            <div>
              Model: <input onChange={(e) => {
                const vehicleModel = {model: e.target.value};
                this.setState({
                  vehicle: Object.assign(this.state.vehicle,vehicleModel)
                });
              }} />
            </div>
            <div>
              Color: <input onChange={(e) => {
                const vehicleColor = {color: e.target.value};
                this.setState({
                  vehicle: Object.assign(this.state.vehicle,vehicleColor)
                });
              }} />
            </div>
            <div>
              Price: <input onChange={(e) => {
                const vehiclePrice = {price: e.target.value};
                this.setState({
                  vehicle: Object.assign(this.state.vehicle,vehiclePrice)
                });
              }} />
            </div>
            <button type="submit">{this.state.button}</button>
          </form>
      </div>
    )
  }
}

export default VehicleForm;
