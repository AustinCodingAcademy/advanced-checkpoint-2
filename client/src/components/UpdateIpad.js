import React, {Component} from "react";
import IpadDetailContainer from '../containers/IpadDetailContainer';
import UpdateIpadFormContainer from '../containers/UpdateIpadFormContainer';

class UpdateIpad extends Component {
  componentDidMount(props){
    let id = this.props.match.params.id;
    this.props.getIpad(id);
  }

  render(){
    return(
      <div>
        <IpadDetailContainer />
        <UpdateIpadFormContainer />
      </div>
    )
  }
}
export default UpdateIpad;
