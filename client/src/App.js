import React, { Component } from "react";
import "./App.css";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import CreateUserContainer from "./containers/CreateUserContainer";
import Buttons from "./components/Buttons"
import UsersContainer from "./containers/UsersContainer";
import UserDetailContainer from "./containers/UserDetailContainer";
 

class App extends Component {
  
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        USER DATABASE
        
        
        <BrowserRouter>
        
        <div>
        <Buttons />

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


