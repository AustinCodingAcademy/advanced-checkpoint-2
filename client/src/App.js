import React, { Component } from "react";
import "./App.css";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Users from "./components/Users";
import CreateUser from "./components/CreateUser";
import UserDetail from "./components/UserDetail";
 

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        Client
        <BrowserRouter>
        <Switch>
            
            <Route path="/users" component={Users} />
            <Route path="/createuser" component={CreateUser} />
            <Route path="/user/:id" component={UserDetail} />
            <Route path="/" component={App} />
            
         </Switch>
        
        </BrowserRouter>
      </div>
    );
  }
}
export default (App);


