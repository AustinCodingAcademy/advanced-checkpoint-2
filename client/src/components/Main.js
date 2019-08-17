import React from "react";
import CarsContainer from "../containers/CarsContainer";
import CreateCarsContainer from "../containers/CreateCarsContainer";

function Main() {
    return (
        <div>
            <h1>Cars</h1>
            <CarsContainer />
            <CreateCarsContainer />
        </div>
    );
}

export default Main;