// Create express instance
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
// Import routes

// Gets credentials by parsing JSON string to object
const credentials = JSON.parse(
    fs.readFileSync('login.json', 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }
      console.log(data);
}));

// Connection URI
const uri = 'mongodb+srv://'.concat(credentials.username, ':', credentials.password, '@cluster-0.zpn5l.mongodb.net/covid?retryWrites=true&w=majority');
// Port
const port = 5000;

// Connect Mongoose to MongoDB
mongoose.connect(uri, {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', () => console.log('successfully connected to db'))

// Create express instance
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});