import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import VehicleContainer from "./containers/VehicleContainer";
import VehiclesContainer from "./containers/VehiclesContainer";
import CreateVehicleContainer from "./containers/CreateVehicleContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {vehicles: []};
  }
  componentDidMount() {
    this.props.getVehicles();
    this.props.getVehicle();
    this.props.createVehicle();
  }
  render() {
    return (
      <BrowserRouter>
        <div>       
          <Switch>
            <Route path="/vehicles" component={VehiclesContainer} />
            <Route path="/vehicle/:id" component={VehicleContainer} />
            <Route path="/vehicles" component={CreateVehicleContainer} />
            <Route path="/" component={Main} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default (App);

