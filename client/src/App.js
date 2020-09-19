import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Testing frontend with Express/Node and MongoDB</h1>
      <form method="post" action="/addname">
        <label>Enter your name</label><br/>
        <input type="text" name="firstName" placeholder="Enter first name..." required/>
        <input type="text" name="lastName" placeholder="Enter last name..." required/>
        <input type="submit" value="Add Name"/>
      </form>
    </div>
  );
}

export default App;