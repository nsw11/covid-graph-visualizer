// Handles HTTP requests for Nodes
const express = require("express");
const router = express.Router();

const Node = require('../models/node.model');

// Gets all nodes in DB and their information
router.get('/', async (req, res) => {
    try {
         const nodes = await Node.find();
         res.send(nodes);
    } catch (err) {
        res.json({ message: err});
    }
});

// Adds new node to our database
router.post('/', async (req, res) => {
    const node = new Node({
        name: req.body.name,
        uuid: req.body.uuid,
        x: req.body.x,
        y: req.body.y,
        status: req.body.status,
        friends: req.body.friends,
    });
    try {
        const savedNode = await node.save();
        res.json(savedNode);
    } catch (err) {
        res.json({ message: err });
    }
});


module.exports = router;