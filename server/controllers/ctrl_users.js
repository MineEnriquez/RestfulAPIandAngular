const mongoose = require('mongoose');
const MongModels = require('../models/model_user');
const User = MongModels.User;
module.exports = {
    getRetrieveAll:function (req, res) {
        console.log("Retrieving all records");
        User.find()
        .then(data => {
            console.log(data);
            
            res.json(data);   // TODO: if API then we should return only the JSON object.
        })
        .catch(err => res.json(err));
    },
    getAddName:function (req, res) {
        console.log(`*** Adding:   ${req.params.name}`);
        user = new User();
        user.name = req.params.name;
        user.save()
            .then(saveResult => res.json(saveResult))
            .catch(err => {
                console.log("Error creating a new User record");
                res.json(err);
            });
    },
    getDeleteName:function (req, res) {
        console.log(`*** Deleting:   ${req.params.name}`);
        User.remove({ name: req.params.name })
            .then(data => {
                res.json({"Data removed":req.params.name})
            })
            .catch(err => res.json(err));
    },
    getDisplayName:function (req, res) {
        console.log(`*** Displaying:   ${req.params.name}`);
        User.find({ name: req.params.name })
            .then(data => {
                res.json({ data: data[0] })
            })
            .catch(err => res.json(err));
    },
}