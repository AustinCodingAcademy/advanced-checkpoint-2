import React, { Component } from "react";

class CreateGarment extends Component {
  constructor() {
    super();
    this.state = {
        name:"",
        description:"",
        price:0,
        category:"",
        color:""
    }
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
          <form onSubmit={(e) => {
              e.preventDefault();
              if (this.props.saveGarment) {
                  this.props.saveGarment(this.state);
              }
            }}>
            <div>
                Name: <input onChange={(e) => {
                    this.setState({
                        name: e.target.value
                    });
                }}  /> </div>
                <div>
                Description: <input onChange={(e) => {
                    this.setState({
                        description: e.target.value
                    });
                }}  /> </div>
                <div>
                Price: <input onChange={(e) => {
                    this.setState({
                        category: e.target.value
                    });
                }}  /> </div>
                <div>
                Category: <input onChange={(e) => {
                    this.setState({
                        category: e.target.value
                    });
                }}  /> </div>
                <div>
                Color: <input onChange={(e) => {
                    this.setState({
                        color: e.target.value
                    });
                }}  /> </div>
            <button>Create</button>
            </form>
            </div>
    );
}   
}

export default (CreateGarment);


