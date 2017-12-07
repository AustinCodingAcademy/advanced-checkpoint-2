// Create a class component that makes a new model (redux fetch practice)
// * Create a form and a button
// * Put a label and an input for each property your model has
// * Bonus - use a drop down if there are a limited number of values for a property
// * Register onChange for each input and use setState to store the information typed in
// * Register onSubmit for the form. 
// * onSubmit call an action called createThing(change it to make sense for your model)
import React from "react";


class CreateAlbum extends React.Component {
    constructor(){
        super();
        this.state = {
            album: {
                title: "",
                artist: "",
                release: "",
                price: ""
            }
        };
    };

    render(){
        return(
            <div>
                <h1>Create Album</h1>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    if(this.props.createAlbum){
                        this.props.createAlbum(this.state.album)
                    }
                    console.log(this.state.album)
                }}>
                    <div>
                        TITLE: <input onChange={(e) => {
                            const title = {title: e.target.value};
                            this.setState({
                                album: Object.assign(this.state.album,title)
                            });
                        }} />
                    </div>
                    <div>
                        ARTIST: <input onChange={(e) => {
                            const artist = {artist: e.target.value};
                            this.setState({
                                album: Object.assign(this.state.album,artist)
                            });
                        }} />
                    </div>
                    <div>
                        RELEASE: <input onChange={(e) => {
                            const release = {release: e.target.value};
                            this.setState({
                                album: Object.assign(this.state.album,release)
                            });
                        }} />
                    </div>
                    <div>
                        PRICE: <input onChange={(e) => {
                            const price = {price: e.target.value};
                            this.setState({
                                album: Object.assign(this.state.album,price)
                            });
                        }} />
                    </div>
                    <button>Create</button>
                </form>
            </div>
        );
    }

}

export default CreateAlbum