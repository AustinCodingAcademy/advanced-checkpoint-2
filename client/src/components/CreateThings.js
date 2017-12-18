import React from "react";

class CreateThings extends React.Component {
  constructor() {
    super();
    this.state = {
    computer: {
        brand: "",
        memory: "",
        color: "",
        mouse: "",
        keyboard: ""
      }
  }
}
  render() {
    console.log(this.props);
    return (
      <div>
        
        <div>
          <h1>Computer</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createComputer) {
              this.props.createComputer(this.state.computer);
            }
          }}>
            <div>
              Brand: <input onChange={(e) => {
                const computer = {brand: e.target.value};
                this.setState({
                  computer: Object.assign(this.state.computer,computer)
                });
              }} />
            </div>
            <div>
              Memory: <input onChange={(e) => {
                const computer = {memory: e.target.value};
                this.setState({
                  computer: Object.assign(this.state.computer,computer)
                });
              }} />
            </div>
            <div>
              Color: <input onChange={(e) => {
                const computer = {color: e.target.value};
                this.setState({
                  computer: Object.assign(this.state.computer,computer)
                });
              }} />
            </div>
            <div>
              Mouse: <input onChange={(e) => {
                const computer = {mouse: e.target.value};
                this.setState({
                  computer: Object.assign(this.state.computer,computer)
                });
              }} />
            </div>
            <div>
              Keyboard: <input onChange={(e) => {
                const computer = {keyboard: e.target.value};
                this.setState({
                  computer: Object.assign(this.state.computer,computer)
                });
              }} />
            </div>
            <button>Create</button>
          </form>
        </div>
                
      </div>
      
    );
  }
}
export default CreateThings;
