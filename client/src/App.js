import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import UserContainer from './containers/UserContainer';
import UsersContainer from './containers/UsersContainer';
import CreateThingsContainer from './containers/CreateThingsContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }
  componentDidMount() {
    this.props.loadUsers();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/users" component={UsersContainer} />
            <Route path="/user/:id" component={UserContainer} />
            <Route path="/createuser" component={CreateThingsContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
