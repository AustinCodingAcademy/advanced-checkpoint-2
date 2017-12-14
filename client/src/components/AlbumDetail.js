import React from "react";

class AlbumDetail extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        console.log("album Detail props: ", this.props.albums)
        const array = this.props.albums;
        const albumId = this.props.match.params.id
        const foundAlbum = array.find((album) => {if (album.id == albumId){return album}});
        console.log(foundAlbum);
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
        );
    }
}

export default AlbumDetail;