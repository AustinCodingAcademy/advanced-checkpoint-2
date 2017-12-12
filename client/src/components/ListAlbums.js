import React from "react";
import array from "../albums";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class ListAlbums extends React.Component {
    render() {
        let renderAlbums = array.map(album => {
            return (
                <div key={album.id} className="List-Albums">
                    <div>ALBUM: {album.title}</div>
                    <div>ARTIST: {album.artist}</div>
                    <div>RELEASE DATE: {album.release}</div>
                    <button>
                        <Link to={"/albumdetail/"+ album.id}>Details</Link>
                    </button>
                    <button type="button">Delete</button>
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
