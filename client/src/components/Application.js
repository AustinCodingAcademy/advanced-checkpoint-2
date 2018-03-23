import React, { Component } from "react";

class Application extends Component {
    componentDidMount () {
        const applicationId = this.props.match.params.id;
        this.props.getApplication(applicationId);
    }
    render () {
        return (
            <div>
                <div style={{textAlign: 'center'}}>Name: {this.props.application.firstname} {this.props.application.lastname}</div>
                <div style={{textAlign: 'center'}}>Experience: {this.props.application.experience}</div>
                <div style={{textAlign: 'center'}}>Top Skills: {this.props.application.skills}</div>
                <div style={{textAlign: 'center'}}>Linkedin Profile: {this.props.application.linkedin}</div>
            </div>
        );
    }
}
export default Application;