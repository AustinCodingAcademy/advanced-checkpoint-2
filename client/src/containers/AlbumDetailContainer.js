import {connect} from "react-redux";
import AlbumDetail from "../components/AlbumDetail";
import deleteAlbum from "../actions"

function mapStateToProps(state){
    return {
        albums: state.albums
    }
}
function mapDispatchToProps(dispatch){
    return {
        deleteAlbum: function (id){
            dispatch(deleteAlbum(id))
        }
    }
}

export default connect(mapStateToProps)(AlbumDetail);