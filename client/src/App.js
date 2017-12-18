import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import ComputerContainer from "./components/ComputerContainer";
import ComputersContainer from "./components/ComputersContainer";
import CreateThingsContainer from "./components/CreateThingsContainer";
import {
  BrowserRouter,
  Route,
  Switch
 } from "react-router-dom";
 import {Link} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {users: []};
  }
  componentDidMount() {
    this.props.loadComputers();
  }
  render() {
    return (
      <div>

      <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/computers"}>View all Computers</Link></li>
            <li><Link to={"/createComputer"}>Make a new Computer</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/computers/:id" component={ComputerContainer} />
          <Route path="/computers" component={ComputersContainer} />
          <Route path="/createComputer" component={CreateThingsContainer} />
          <Route path="/" component={Main} />
        </Switch>
      </div>
      </BrowserRouter>
      </div>
    );
  }
}
export default (App);


