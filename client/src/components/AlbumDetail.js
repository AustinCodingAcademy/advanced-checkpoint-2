// Create a function component that shows details of one thing (UserDetail)
// * Use a prop that has the array of your models
// * Use a parameter from the route path /:id to find the model to show
// * Use whatever html you want to show all of the properties of your thing
import React from "react";

class AlbumDetail extends React.Component {
    componentDidMount(){
        console.log("Album Detail Has been rendered")
    }
    
    render(){
        return (
            <div>
                <h1>Album Details</h1>
                <div className="List-Albums">
                    <div>Album Title: </div>
                    <div>Album Artist: </div>
                    <div>Album Release: </div>
                    <div>Album Price: </div>
                </div>
            </div>
        )
    }
}

export default AlbumDetail;