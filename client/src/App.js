import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import GameContainer from "./containers/GameContainer";
import GamesContainer from "./containers/GamesContainer";
import CreateThingsContainer from "./containers/CreateThingsContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }
  componentDidMount() {
    this.props.loadGames();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/games" component={GamesContainer} />
            <Route path="/game/:id" component={GameContainer} />
            <Route path="/creategame" component={CreateThingsContainer} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
