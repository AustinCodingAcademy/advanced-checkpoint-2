import React, { Component } from "react";
import "./App.css";
import ListOfGarmentsContainer from "./containers/ListOfGarmentsContainer";
import CreateGarmentContainer from "./containers/CreateGarmentContainer";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <ListOfGarmentsContainer />
        <CreateGarmentContainer />
      </div>
    );
  }
}
export default (App);


