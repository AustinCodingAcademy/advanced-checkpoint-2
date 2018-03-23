import React from "react";
import { Redirect } from "react-router-dom";

class CreateThings extends React.Component {
  constructor() {
    super();
    this.state = {
      redirectToNewPage: false,
      application: {
        firstname: "",
        lastname: "",
        experience: "",
        skills: "",
        linkedin: ""
      }
    };

  }
      
  handleClick = () => {
    this.setState({ redirectToNewPage: true })
  }

  render() {

    if (this.state.redirectToNewPage) {
      return(
        <Redirect to="/applications" />
      )
    }

    return (
      <div>
        <div>
          <h1 style={{textAlign: 'center'}}>Fill out Information Below</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createApplication) {
              this.props.createApplication(this.state.application);
              this.handleClick();
            }
          }}>
            <div style={{textAlign: 'center'}}>
              First Name: <input  onChange={(e) => {
                const application = {firstname: e.target.value};
                this.setState({
                    application: Object.assign(this.state.application,application)
                });
              }} />
            </div>
            <div style={{textAlign: 'center'}}>
              Last Name: <input  onChange={(e) => {
                const application = {lastname: e.target.value};
                this.setState({
                    application: Object.assign(this.state.application,application)
                });
              }} />
            </div>
            <div style={{textAlign: 'center'}}>
              Years of Experience: <input onChange={(e) => {
                const application = {experience: e.target.value};
                this.setState({
                    application: Object.assign(this.state.application,application)
                });
              }} />
            </div>
            <div style={{textAlign: 'center'}}>
              Top Skills: <input onChange={(e) => {
                const application = {skills: e.target.value};
                this.setState({
                    application: Object.assign(this.state.application,application)
                });
              }} />
            </div>
            <div style={{textAlign: 'center'}}>
              LinkedIn URL: <input onChange={(e) => {
                const application = {linkedin: e.target.value};
                this.setState({
                    application: Object.assign(this.state.application,application)
                });
              }} />
            </div>
            <button style={{float: 'right'}}>Apply</button>
          </form>
        </div>        
      </div>
      
    );
  }
}
export default CreateThings;
