// Create express instance
const express = require("express");
const app = express();
const port = 8080;

// Check if server is running
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// Create GET route; we will fetch it from our client side app
app.get('/', (req, res) => {
    res.send({express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'});
});