import React, { Component } from "react";

class Car extends Component {

    componentDidMount() {

         
        this.props.getCar(this.props.match.params.id);
    }
    render() {

        return (
            <div>
                <div>{this.props.car.make}</div>
                <div>{this.props.car.model}</div>
                <div>{this.props.car.year}</div>
                <div>{this.props.car.color}</div>
                <div>{this.props.car.engine}</div>
            </div>
        );
    }
}

export default Car;