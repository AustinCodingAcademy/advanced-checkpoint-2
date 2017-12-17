import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class ListAlbums extends React.Component {
    constructor(props){
        super(props);
    }
  
    render() {
        const array = this.props.albums;
        let renderAlbums = array.map(album => {
            return (
                <div key={album._id} className="List-Albums">
                    <div>ALBUM: {album.title}</div>
                    <div>ARTIST: {album.artist}</div>
                    <div>RELEASE DATE: {album.release}</div>
                    <button>
                        <Link to={"/albumdetail/"+ album._id}>Details</Link>
                    </button>
                    <button onClick={() => this.props.deleteAlbum(album._id)} type="button">Delete</button>
                </div>
            );
        });
        return (
            <div>
                <h1>List of Albums</h1>
                {renderAlbums}
            </div>
        );
    };
};

ListAlbums.propTypes = {
  albums: PropTypes.array
};

export default ListAlbums;
