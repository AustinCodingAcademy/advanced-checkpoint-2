// Create a function component that shows details of one thing (UserDetail)
// * Use a prop that has the array of your models
// * Use a parameter from the route path /:id to find the model to show
// * Use whatever html you want to show all of the properties of your thing
import React from "react";
import albums from "../albums"

class AlbumDetail extends React.Component {    
    render(){
        const albumId = this.props.match.params.id
        const foundAlbum = albums.find((album) => {if (album.id == albumId){return album}});
        console.log(foundAlbum)
        return (
            <div>
                <h1>Album Details</h1>
                <div className="List-Albums">
                    <div>Album Title: {foundAlbum.title} </div>
                    <div>Album Artist: {foundAlbum.artist} </div>
                    <div>Album Release: {foundAlbum.release}</div>
                    <div>Album Price: {foundAlbum.price}</div>
                </div>
            </div>
        )
    }
}

export default AlbumDetail;