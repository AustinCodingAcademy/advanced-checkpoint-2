import React, { Component } from 'react';

class IpadForm extends Component {
  constructor(props){
    super();
    this.state = {
      ipad: {
        model: "",
        memory: ""
      },
      button: ""
    }
  }
  componentDidMount(props){
    if(this.props.createIpad){
      this.setState({button: "ADD THIS IPAD"});
    }
    if(this.props.updateIpad){
      this.setState({
        ipad: this.props.ipad,
        button: "SUBMIT CHANGES"
      });
    }
  }

  render(){
    return(
      <div>
        <h1>Ipad</h1>
        <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createIpad) {
              this.props.createIpad(this.state.ipad);
            }
            if (this.props.updateIpad){
              this.props.updateIpad(this.state.ipad);
            }
          }}>
            <div>
              Model: <input onChange={(e) => {
                const ipadModel = {model: e.target.value};
                this.setState({
                  ipad: Object.assign(this.state.ipad,ipadModel)
                });
              }} />
            </div>
            <div>
              Memory: <input onChange={(e) => {
                const ipadMemory = {memory: e.target.value};
                this.setState({
                  ipad: Object.assign(this.state.ipad,ipadMemory)
                });
              }} />
            </div>
            <button type="submit">{this.state.button}</button>
          </form>
      </div>
    )
  }
}

export default IpadForm;
