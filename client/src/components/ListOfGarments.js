import React from "react";
import garments from "../state";

function ListOfGarments(props) {

    const garmentDivs = props.garments.map(function(garment){
        return <div>{garment.name} - {garment.description} - {garment.price} - {garment.category} - {garment.color} </div>
    });

    return (
    <div>
    {garmentDivs}    
    </div>);
}
export default ListOfGarments;