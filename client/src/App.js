import React, { Component } from "react";
import "./App.css";
import ListOfUsersContainer from "./containers/ListOfUsersContainer";
import CreateUserContainer from "./containers/CreateUserContainer";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <ListOfUsersContainer />
        <CreateUserContainer />
      </div>
    );
  }
}
export default App;
