import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {data: null};
    }

    // If our Express server has been hooked up
    componentDidMount() {
        // res should be a JSON
        this.callAPI()
            .then(res => this.setState({ data: res.express }))
            .catch(err => console.log(err));
    }

    // Fetches our GET route from the Express server
    callAPI = async () => {
        // Fetch response
        const response = await fetch('/api');
        // Get response as JSON 
        const body = await response.json();
        console.log(body);

        if (response.status !== 200) {
            throw Error(body.message);
        }
        return body;
    }

    render() {
        return (
            <div className="App">
            <h1>{this.state.data}</h1>
            <form method="post" action="/addname">
                <label>Enter your name</label><br/>
                <input type="text" name="firstName" placeholder="Enter first name..." required/>
                <input type="text" name="lastName" placeholder="Enter last name..." required/>
                <input type="submit" value="Add Name"/>
            </form>
            </div>
        )
    }
}

export default App;