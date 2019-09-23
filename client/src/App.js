import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EntriesContainer from "./containers/EntriesContainer";
import TextInputContainer from "./containers/TextInputContainer";
import ShowEntryContainer from "./containers/ShowEntryContainer";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.loadEntries();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <EntriesContainer />
          <Switch>
            <Route path="/" exact={true} component={TextInputContainer} />
            <Route path="/entry/:id" component={ShowEntryContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default (App);


