// Create express instance
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
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
const uri = 'mongodb+srv://'.concat(credentials.username, ':', credentials.password, '@cluster-0.zpn5l.mongodb.net/covid?retryWrites=true&w=majority');
// Create express instance
const app = express();
// Port
const port = 5000;

// ROUTES
let nodeRoute = require('./routes/nodeRoute');

// Connect Mongoose to MongoDB
mongoose.connect(uri, {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', () => console.log('successfully connected to db'));

app.use(cors());
app.use(bodyParser.json());
app.use('/', nodeRoute);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});