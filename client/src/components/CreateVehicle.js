import React from "react";

class CreateVehicle extends React.Component {
  constructor() {
    super();
    this.state = {
      vehicle: {
        year: "",
        make: "",
        model: "",
        price: "",
        color: "",
        miles: "",
        fuel: ""
      }
    };
  }
  render() {
    return (
      <div>
        <div>
          <h1>Create Vehicle</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createVehicle) {
              this.props.createVehicle(this.state.vehicle);
            }
          }}>
            <div>
              Year: <input onChange={(e) => {
                const vehicle = {year: e.target.value};
                this.setState({
                  vehicle: Object.assign(this.state.vehicle,vehicle)
                });
              }} />
            </div>
            <div>
              Make: <input onChange={(e) => {
                const vehicle = {make: e.target.value};
                this.setState({
                  vehicle: Object.assign(this.state.vehicle,vehicle)
                });
              }} />
            </div>
            <div>
              Model: <input onChange={(e) => {
                const vehicle = {model: e.target.value};
                this.setState({
                  vehicle: Object.assign(this.state.vehicle,vehicle)
                });
              }} />
            </div>
            <div>
              Price: <input onChange={(e) => {
                const vehicle = {price: e.target.value};
                this.setState({
                  vehicle: Object.assign(this.state.vehicle,vehicle)
                });
              }} />
            </div>
            <div>
              Color: <input onChange={(e) => {
                const vehicle = {color: e.target.value};
                this.setState({
                  vehicle: Object.assign(this.state.vehicle,vehicle)
                });
              }} />
            </div>
            <div>
              Miles: <input onChange={(e) => {
                const vehicle = {miles: e.target.value};
                this.setState({
                  vehicle: Object.assign(this.state.vehicle,vehicle)
                });
              }} />
            </div>
            <div>
              Fuel: <input onChange={(e) => {
                const vehicle = {fuel: e.target.value};
                this.setState({
                  vehicle: Object.assign(this.state.vehicle,vehicle)
                });
              }} />
            </div>
            <button>Create</button>
          </form>
        </div>
      </div> 
    );
  }
}
export default CreateVehicle;
