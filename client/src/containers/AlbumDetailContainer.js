import {connect} from "react-redux";
import AlbumDetail from "../components/AlbumDetail";


function mapStateToProps(state){
    return {
        albums: state.albums
    }
}

export default connect(mapStateToProps)(AlbumDetail);