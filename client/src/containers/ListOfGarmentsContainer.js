import { connect } from "react-redux";
import ListOfGarments from "../components/ListOfGarments";

function mapStateToProps(state){
    return{
        garments: state.garments
    };
}
function mapDispatchToProps(dispatch){
    return{
        
    }
}
const ListOfGarmentsContainer = connect(mapStateToProps, mapDispatchToProps)(ListOfGarments);
export default ListOfGarmentsContainer;