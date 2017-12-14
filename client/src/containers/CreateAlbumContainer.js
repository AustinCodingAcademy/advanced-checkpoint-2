import {connect} from "react-redux";
import CreateAlbum from "../components/CreateAlbum";
import {createAlbum} from "../actions";


function mapDispatchToProps(dispatch){
    return {
        createAlbum: function(album){
            dispatch(createAlbum(album))
        }
    }
}

export default connect(null, mapDispatchToProps)(CreateAlbum);