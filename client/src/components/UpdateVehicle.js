import React, {Component} from "react";
import VehicleDetailContainer from '../containers/VehicleDetailContainer';
import UpdateVehicleFormContainer from '../containers/UpdateVehicleFormContainer';

class UpdateVehicle extends Component {
  componentDidMount(props){
    let id = this.props.match.params.id;
    this.props.getVehicle(id);
  }

  render(){
    return(
      <div>
        <VehicleDetailContainer />
        <UpdateVehicleFormContainer />
      </div>
    )
  }
}
export default UpdateVehicle;
