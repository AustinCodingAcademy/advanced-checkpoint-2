import React, { Component } from "react";
import "./App.css";
import ListOfUsersContainer from "./containers/ListOfUsersContainer";
import CreateUserContainer from "./containers/CreateUserContainer";
import UserDetailContainer from "./containers/UserDetailContainer";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    return (
      <BrowserRouter>
      <div>
        <Switch>
          <Route path="/listofusers" component={ListOfUsersContainer} />
          <Route path="/createUser" component={CreateUserContainer} />
          <Route path="/users/:id" component={UserDetailContainer} />
        </Switch>
        <ul>
          <ol><Link to={"/createuser"}>Create User</Link></ol>
          <ol><Link to={"/listofusers"}>See List of Users Here</Link></ol>
        </ul>
      </div>
    </BrowserRouter>
    );
  }
}
export default App;
