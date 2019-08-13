import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import ListOfVehiclesContainer from './containers/ListOfVehiclesContainer';
import VehicleDetailContainer from './containers/VehicleDetailContainer';
import CreateVehicleFormContainer from './containers/CreateVehicleFormContainer';
import DeletedVehicle from './components/DeletedVehicle';
import UpdateVehicleContainer from './containers/UpdateVehicleContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {vehicles: []};
  }
  componentDidMount() {
    this.props.loadVehicles();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <h4>Links:</h4>
            <Link to={"/createvehicle"}>Add a new vehicle</Link>
            <Link to={"/listofvehicles"}>View list of vehicles</Link>
            <Switch>
              <Route path="/updatevehicle/:id" component={UpdateVehicleContainer} />
              <Route path="/deletedvehicle" component={DeletedVehicle} />
              <Route path="/createvehicle" component={CreateVehicleFormContainer} />
              <Route path="/vehicle/:id" component={VehicleDetailContainer} />
              <Route path="/listofvehicles" component={ListOfVehiclesContainer} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default (App);
