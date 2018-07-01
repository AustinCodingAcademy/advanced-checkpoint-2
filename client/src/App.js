import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import StockList from "./containers/StockListContainer";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={StockList} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
