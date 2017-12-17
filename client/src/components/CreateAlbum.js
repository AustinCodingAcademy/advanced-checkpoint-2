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
        console.log("create album props: ", this.props)
        return(
            <div>
                <h1>Create Album</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    console.log(this.props)
                    this.props.createAlbum(this.state.album);
                  
                }}>
                    <div>
                        TITLE: <input onChange={(e) => {
                            const title = {title: e.target.value};
                            this.setState({
                                album: Object.assign(this.state.album,title)
                            });
                            console.log(this.state)
                        }} />
                    </div>
                    <div>
                        ARTIST: <input onChange={(e) => {
                            const artist = {artist: e.target.value};
                            this.setState({
                                album: Object.assign(this.state.album,artist)
                            });
                            console.log(this.state)
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
                            console.log(this.state)
                        }} />
                    </div>
                    <button>Create</button>
                </form>
            </div>
        );
    }

}

export default CreateAlbum