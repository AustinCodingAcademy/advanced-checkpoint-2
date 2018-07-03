import React, { Component } from "react";
import "./App.css";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Users from "./components/Users";
import CreateUserContainer from "./containers/CreateUserContainer";
import UserDetail from "./components/UserDetail";
 

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    return (
      <div>
        Client
        <CreateUserContainer />
        
      </div>
    );
  }
}
export default (App);


