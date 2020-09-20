// Create express instance
const express = require("express");
const mongoose = require("mongoose");
const fs = require('fs');

// Gets credentials by parsing JSON string to object
const credentials = JSON.parse(
    fs.readFileSync('login.json', 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }
      console.log(data);
}));

// Connection URI
const uri = 'mongodb+srv://'.concat(credentials.username, ':', credentials.password, '@cluster-0.zpn5l.mongodb.net/cluster-o?retryWrites=true&w=majority');
// Port
const port = 5000;

// Connect Mongoose to MongoDB
mongoose
    .connect(uri, {useNewUrlParser: true})
    .then(() => {
        const app = express();
        // Create GET route; we will fetch it from our client side app
        app.get('/api', (req, res) => {
            res.send({express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'});
        });
        
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
});