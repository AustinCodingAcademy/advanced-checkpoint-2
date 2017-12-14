import CreateAlbumContainer from "../containers/CreateAlbumContainer";
import ListAlbumsContainer from "../containers/ListAlbumsContainer";
import React from "react";

function Main() {

    return (
        <div  className="container">
            <CreateAlbumContainer />
            <ListAlbumsContainer />
        </div>
    )
}


export default Main;