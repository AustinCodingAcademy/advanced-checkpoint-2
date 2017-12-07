// Create a function component that list out a collection of your models (ListOfUsers)
// * Use prop types to define what props the component needs
// * It should probably need a prop named after the plural of your model, and it should probably be an array
// * Probably want to map over this array and create some divs or li’s showing 3 of the properties of the item
// * Create a Link on each item so you can navigate to the detail page
// * Create a button on each item so you can delete the item

import React from "react";
import array from "../albums";

class ListAlbums extends React.Component {

  render() {
    let albums = array.map((album) => {
        return (
            <div key={album.id} className="List-Albums">
                <div>ALBUM: {album.title}</div>
                <div>ARTIST: {album.artist}</div>
                <div>RELEASE DATE: {album.release}</div>
            </div>
        )
    });
    
   
    return (
        <div>
          {albums}  
        </div>
    );
  }
}

export default ListAlbums;
