import React, { Component } from "react";
import "./App.css";
//import Main from "./components/Main";
import LeftDrawer from "./components/LeftDrawer";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Link} from "react-router-dom";

import ApplicationContainer from "./containers/ApplicationContainer";
import ApplicationsContainer from "./containers/ApplicationsContainer";
import CreateThingsContainer from "./containers/CreateThingsContainer";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  componentDidMount() {
    this.props.loadApplications();
  }

  handleTouchMap() {
    this.setState({open: !this.state.open});
  }

  handleClose () {
    this.setState({open: false});
  }

  render() {
    return (
      <div>

        <MuiThemeProvider>
          <BrowserRouter>
          <div>
            <AppBar 
              title="Online Application"
              onLeftIconButtonClick = { this.handleTouchMap.bind(this) }
              onTitleClick = {this.handleClose.bind(this)}
            />
            <LeftDrawer open={this.state.open} close={this.handleClose.bind(this)} />
              <Route path="/application/:id" component={ApplicationContainer} />
              <Route path="/applications" component={ApplicationsContainer} />
              <Route path="/apply" component={CreateThingsContainer} />
          </div>
          </BrowserRouter>
        </MuiThemeProvider>

      </div>
    );
  }
}
export default (App);

