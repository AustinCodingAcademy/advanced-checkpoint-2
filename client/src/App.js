import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { withStyles } from "@material-ui/core/styles";
import StockList from "./containers/StockListContainer";
import StockDetails from "./containers/StockDetailsContainer";
import CreateStock from "./containers/CreateStockContainer";

const styles = () => ({
  root: {
    backgroundColor: "gainsboro",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
  },
});

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {}
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <BrowserRouter>
          <Switch>
            <Route path="/details/:ticker" component={StockDetails} />
            <Route path="/create" component={CreateStock} />
            <Route path="/" component={StockList} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
