// Create express instance
const express = require("express");
const mongoose = require('mongoose');

const app = express();
const port = 8080;




// Create GET route; we will fetch it from our client side app
app.get('/api', (req, res) => {
    res.send({express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'});
});


// Check if server is running
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});