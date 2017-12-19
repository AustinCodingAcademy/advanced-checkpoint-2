import React, { Component } from "react";

class Application extends Component {
    componentDidMount () {
        const applicationId = this.props.match.params.id;
        this.props.getApplication(applicationId);
    }
    render () {
        return (
            <div>
                <div>Name: {this.props.application.name}</div>
                <div>DOB: {this.props.application.dob}</div>
                <div>Experience: {this.props.application.experience}</div>
                <div>University: {this.props.application.university}</div>
                <div>Location: {this.props.application.location}</div>
            </div>
        );
    }
}
export default Application;