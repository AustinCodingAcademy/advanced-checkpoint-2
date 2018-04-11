import React, { Component } from "react";
import "./App.css";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import {Link} from "react-router-dom";
import DetailsContainer from "./containers/DetailsContainer"
import NewMovieContainer from "./containers/NewMovieContainer"
import ListContainer from "./containers/ListContainer"

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <h2>The Greatest Films of the Century</h2>
          <ListContainer />
          <Route path="/create/" component={NewMovieContainer} />
          <Route path="/movie/:id" component={DetailsContainer} />
        </div>
      </BrowserRouter>

    );
  }
}
export default (App);
