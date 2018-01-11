import React, { Component } from 'react';
import {Link} from "react-router-dom";


class IpadDetail extends Component {

  componentDidMount(props){
    let id = this.props.match.params.id;
    this.props.getIpad(id);
  }

  render() {
    console.log(this.props)
    let id = this.props.match.params.id;
    return(
      <div>
        <h2>The Ipads</h2>
        <p>Model: {this.props.ipad.model}</p>
        <p>Memory: {this.props.ipad.memory}</p>
        <Link to={"/deletedipad"}>
          <button onClick={()=>{
            this.props.deleteIpad(id);
          }} >DELETE</button>
        </Link>
        <Link to={`/updateipad/${id}`}>
          <button>EDIT</button>
        </Link>
      </div>
    );
  }
}

export default IpadDetail;
