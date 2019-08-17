import React from "react";

class CreateCars extends React.Component {
    constructor() {
        super();
        this.state = {
            car: {
                make: "",
                model: "",
                year: "",
                color: "",
                engine: "",
            }
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Car</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        if (this.props.addCar) {
                            this.props.addCar(this.state.car);
                        }
                    }}>
                    <div>
                        Make: <input onChange={(e) => {
                            const car = {make: e.target.value};
                            this.setState({
                                car: Object.assign(this.state.car,car)
                            });
                        }} />
                    </div>
                    <div>
                        Model: <input onChange={(e) => {
                            const car = {model: e.target.value};
                            this.setState({
                                car: Object.assign(this.state.car,car)
                            });
                        }} />
                    </div>   
                    <div>
                        Year: <input onChange={(e) => {
                            const car = {year: e.target.value};
                            this.setState({
                                car: Object.assign(this.state.car,car)
                            });
                        }} />
                    </div>
                    <div>
                        Color: <input onChange={(e) => {
                            const car = {color: e.target.value};
                            this.setState({
                                car: Object.assign(this.state.car,car)
                            });
                        }} />
                    </div>
                    <div>
                        Engine: <input onChange={(e) => {
                            const car = {engine: e.target.value};
                            this.setState({
                                car: Object.assign(this.state.car,car)
                            });
                        }} />
                    </div>
                    <button>Add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateCars;