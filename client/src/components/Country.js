
import React, { Component } from "react";

class Country extends Component {

    componentDidMount() {

         
        this.props.getCountry(this.props.match.params.id);
    }
    render() {

        return (
            <div>
                <div>{this.props.country.continent}</div>
                <div>{this.props.country.capital}</div>
                <div>{this.props.country.leader}</div>
                <div>{this.props.country.population}</div>
                <div>{this.props.country.currency}</div>
            </div>
        );
    }
}

export default Country;

