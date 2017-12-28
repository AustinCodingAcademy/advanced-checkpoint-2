import React, { Component } from "react";
import "./App.css";
import ListOfUsersContainer from "./containers/ListOfUsersContainer";
import CreateUserContainer from "./containers/CreateUserContainer";
import UserDetailContainer from "./containers/UserDetailContainer";

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
        <UserDetailContainer />
      </div>
    );
  }
}
export default App;
