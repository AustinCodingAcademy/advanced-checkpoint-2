import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import RobotsContainer from "./containers/RobotsContainer";
import RobotContainer from "./containers/RobotContainer";
import CreateRobotContainer from "./containers/CreateRobotContainer";
import EditRobotContainer from "./containers/EditRobotContainer";

class App extends Component {
  componentWillMount() {
    this.props.fetchRobots();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/create" component={CreateRobotContainer} />
            <Route path="/robots/:id" component={RobotContainer} />
            <Route path="/edit/:id" component={EditRobotContainer} />
            <Route path="/" component={RobotsContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default (App);


