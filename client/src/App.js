import React, { Component } from "react";
import "./App.css";
import ListAlbums from "./components/ListAlbums"

class App extends Component {
  
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <ListAlbums />
   
      </div>
    );
  }
}
export default (App);


