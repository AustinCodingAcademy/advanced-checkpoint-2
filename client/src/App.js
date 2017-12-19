import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Link} from "react-router-dom";
import ApplicationContainer from "./containers/ApplicationContainer";
import ApplicationsContainer from "./containers/ApplicationsContainer";
import CreateThingsContainer from "./containers/CreateThingsContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {users: []};
  }
  componentDidMount() {
    this.props.loadApplications();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <div><Link to={"/"}>Home</Link></div>
            <div><Link to={"/applications"}>All Applications</Link></div>
            <div><Link to={"/createapplication"}>Apply</Link></div>
          </div>  
          <Switch>
            <Route path="/application/:id" component={ApplicationContainer} />
            <Route path="/applications" component={ApplicationsContainer} />
            <Route path="/createapplication" component={CreateThingsContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default (App);

