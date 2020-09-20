// Model for node in graph
const mongoose = require("mongoose");

// schema for graph node
const schema = mongoose.Schema({
    name: String,
    uuid: Number, 
    x: Number,
    y: Number,
    status: {
        type: String,
        enum: ["untested", "tested positive", "tested negative", "exposed"],
    },
    friends: Array,
});

// create new mongoose model using schema and export
module.exports = mongoose.model("GraphNode", schema);

