import React, { Component } from "react";
import "./App.css";
import CreateUser from "./containers/CreateUserContainer";
import ListUsers from "./containers/ListUsersContainer";
import UserDetail from "./containers/UserDetailContainer.js";
import UpdateUser from "./containers/UpdateUserContainer.js";
import Header from "./components/Header.js";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
 

  componentDidMount() {
    this.props.loadUsers();
  }
  
  render() {
    return (
      <BrowserRouter>
    
        <div className="create-user-div">
          <Header />
          <Switch>
            <Route path="/user/:id" component={UserDetail} />
            <Route path="/new_user/" component={CreateUser} />
            <Route path="/update_user/:id" component={UpdateUser} />
            <Route path="/" component={ListUsers} />
          </Switch>
       
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  loadUsers: PropTypes.func,
};

export default (App);



