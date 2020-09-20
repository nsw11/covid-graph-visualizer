import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
        }
    }
    componentDidMount() {
        // res should be a JSON
        this.callAPI()
            .then(res => this.setState({ nodes: res }))
            .catch(err => console.log(err));
    }

    // Fetches our GET route from the Express server
    callAPI = async () => {
        // Fetch response
        const response = await fetch('http://localhost:5000/');
        // Get response as JSON 
        const body = await response.json();
        console.log(body);

        if (response.status !== 200) {
            throw Error(body.message);
        }
        return body;
    }


    render() {
        console.log(this.state);
        return (
            <div className="App">
            </div>
        )
    }
}

export default App;