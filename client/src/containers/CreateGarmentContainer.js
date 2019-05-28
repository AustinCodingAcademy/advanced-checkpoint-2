import { connect } from "react-redux";
import CreateGarment from "../components/CreateGarment";

function mapStateToProps(state){
    return{
        garments: state.garments
    };
}
function mapDispatchToProps(dispatch){
    return{
        saveGarment: function(garment){
            //call action haven't made yet
        }    
    }
}
const CreateGarmentContainer = connect(mapStateToProps, mapDispatchToProps)(CreateGarment);
export default CreateGarmentContainer;