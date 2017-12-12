export function loadAlbums(){
    return function(dispatch){
        fetch("/albums")
        .then(response => response.json())
        .then(albums => dispatch(albumsLoaded(albums)))
        .catch(err => console.log(err))
    }
};

export function albumsLoaded(albums){
    return {
        type: "ALBUMS_LOADED",
        value: albums
    };
}

export function createAlbum(album){
    return function(dispatch){
        fetch("/albums", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(album)
        }).then(() => dispatch(loadAlbums()));
    };
}

export function deleteAlbum(id){
    return function(dispatch){
        fetch("/albums" + id, {
            method: "DELETE"
        })
        .then(() => dispatch(loadAlbums()))
    }
};
