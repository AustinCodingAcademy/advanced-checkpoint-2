import React from "react";

class CreateThings extends React.Component {
  constructor() {
    super();
    this.state = {
      application: {
        name: "",
        dob: "",
        experience: "",
        university: "",
        location: ""
      }
    };
  }
  render() {
    return (
      <div>
        <div>
          <h1>Application</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createApplication) {
              this.props.createApplication(this.state.application);
            }
          }}>
            <div>
              Name: <input onChange={(e) => {
                const application = {name: e.target.value};
                this.setState({
                    application: Object.assign(this.state.application,application)
                });
              }} />
            </div>
            <div>
              DOB: <input type="Date" onChange={(e) => {
                const application = {dob: e.target.value};
                this.setState({
                    application: Object.assign(this.state.application,application)
                });
              }} />
            </div>
            <div>
              Experience: <input onChange={(e) => {
                const application = {experience: e.target.value};
                this.setState({
                    application: Object.assign(this.state.application,application)
                });
              }} />
            </div>
            <div>
              University: <input onChange={(e) => {
                const application = {university: e.target.value};
                this.setState({
                    application: Object.assign(this.state.application,application)
                });
              }} />
            </div>
            <div>
              Location: <input onChange={(e) => {
                const application = {location: e.target.value};
                this.setState({
                    application: Object.assign(this.state.application,application)
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
