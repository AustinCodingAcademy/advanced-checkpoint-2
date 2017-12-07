import React, { Component } from "react";
import "./App.css";
import ListAlbums from "./components/ListAlbums";
import CreateAlbum from "./components/CreateAlbum";
import AlbumDetail from "./components/AlbumDetail";

class App extends Component {
  
  componentDidMount() {
  }
  render() {
    return (
      <div className="container">
        <CreateAlbum />
        <ListAlbums />
        <AlbumDetail />
      
      </div>
    );
  }
}
export default (App);


