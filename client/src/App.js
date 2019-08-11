import React, { Component } from "react";
import "./App.css";
import ListOfGamesContainer from "./containers/ListOfGamesContainer";
import CreateGameContainer from "./containers/CreateGameContainer";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <ListOfGamesContainer />
        <CreateGameContainer />
      </div>
    );
  }
}
export default (App);
