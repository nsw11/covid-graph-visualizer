import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            uuid: 1234,
            x: 1,
            y: 1,
            status: "",
            friends: [],
        };
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
        const response = await fetch('/');
        // Get response as JSON 
        const body = await response.json();
        console.log(body);

        if (response.status !== 200) {
            throw Error(body.message);
        }
        return body;
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const payload = {
            userName: this.state.userName,
            uuid: this.state.uuid,
            x: this.state.x,
            y: this.state.y,
            status: this.state.status,
            friends: this.state.friends,
        };
    }

    handleChange = ({ target }) => {
        // Target is form input, which has name and value fields
        const { name, value } = target;
        this.setState({ name : value })
    }

    render() {
        return (
            <div className="App">
            <h1>{this.state.data}</h1>
            <form method="post" action="/addname" onSubmit={this.handleSubmit}>
                <label>Enter your name</label><br/>
                <input 
                    type="text" 
                    name="firstName" 
                    placeholder="Enter first name..." 
                    value={this.state.firstName}
                    onChange={this.handleChange} 
                    required
                />
                <input 
                    type="text" 
                    name="status" 
                    placeholder="Enter COVID-19 status..." 
                    value={this.state.status} required
                    onChange={this.handleChange}
                />
                <input type="submit" value="Add Node"/>
            </form>
            </div>
        )
    }
}

export default App;