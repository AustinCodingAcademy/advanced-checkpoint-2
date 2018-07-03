import React, { Component } from "react";
import "./App.css";
import {BrowserRouter,Route,Switch,Link} from "react-router-dom";
import CreateUserContainer from "./containers/CreateUserContainer";

import UsersContainer from "./containers/UsersContainer";
import UserDetailContainer from "./containers/UserDetailContainer";
 

class App extends Component {
  
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    return (
      <div>
        Client
        
        
        <BrowserRouter>
        <div>
        <p>
        <Link to="/users"> List of Users</Link>
        <Link to="/create">Create New User</Link>
        </p>

        <Switch>
            
        
            <Route path="/users" component={UsersContainer} />
            <Route path="/create" component={CreateUserContainer} />
            <Route path="/user/:id" component={UserDetailContainer} />
            
            
         </Switch>
         </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default (App);


