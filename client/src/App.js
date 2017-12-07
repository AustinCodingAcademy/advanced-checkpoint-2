import React, { Component } from "react";
import "./App.css";
import ListAlbums from "./components/ListAlbums"
import CreateAlbum from "./components/CreateAlbum"

class App extends Component {
  
  componentDidMount() {
  }
  render() {
    return (
      <div className="container">
        <ListAlbums />
        <CreateAlbum />
      
      </div>
    );
  }
}
export default (App);


