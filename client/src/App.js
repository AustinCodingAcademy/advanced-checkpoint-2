import React, { Component } from "react";
import "./App.css";
import AlbumDetail from "./components/AlbumDetail";
import Main from "./components/Main"
import {BrowserRouter, Switch, Route} from 'react-router-dom';


class App extends Component {
  
  componentDidMount() {
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path={'/albumdetail/:id'} component={AlbumDetail}/>
            <Route path={'/'} component={Main}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default (App);


