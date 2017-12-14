import React, { Component } from "react";
import "./App.css";
import AlbumDetailContainer from "./containers/AlbumDetailContainer";
import Main from "./components/Main"
import {BrowserRouter, Switch, Route} from 'react-router-dom';


class App extends Component {
  
  componentDidMount() {
    this.props.loadAlbums();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path={'/albumdetail/:id'} component={AlbumDetailContainer}/>
            <Route path={'/'} component={Main}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default (App);


