const Obj = require("../models/obj.model");

exports.getLast = (req, res) => {
    res.status(200).send(`Last entry for ${req.params.id}`);
}

exports.register = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create new object
    const newObj = new Obj(req.body.id, req.body.un, req.body.password);

    // Profile registered! Send a JSON object of the new profile as a HTTP response message. 
    res.status(200).send(newObj);
}