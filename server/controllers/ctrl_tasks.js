const mongoose = require('mongoose');
const MongModels = require('../models/model_task');
const bcrypt = require('bcrypt');
const flash = require('express-flash');
const Task = MongModels.Task;

module.exports = {
    e2etest: function (req, res) {
        console.log("Client - Server E2E test: ");
        console.log (`Post event recived value: ${req.body.data}`);
        console.log ();
    },
    retrieveAll: function (req, res) {
        console.log("Retrieve all documents")
        // console.log(req);
        Task.find()
            .then(tasks => {
                console.log(tasks);

                res.json(tasks);   // NOTE: if API then we should return only the JSON object.
            })
            .catch(err => res.json(err));
    },
    retrieveId: function (req, res) {
        console.log("Retrieve one document");
        Task.find({ _id: req.params.id })
            .then(data => {
                res.json({ data: data[0] })
            })
            .catch(err => res.json(err));
    },
    updateId: function (req, res) {
        console.log("--------------------------");
        console.log("Update a document");
        console.log(req.body);
        Task.update({ _id: req.params.id }, req.body)
            .then(data => {
                console.log(data);
                res.json({ data: data[0] })
            })
            .catch(err => res.json(err));
    },
    deleteId: function (req, res) {
        console.log(`*** Deleting:   ${req.params.id}`);
        Task.remove({ _id: req.params.id })
            .then(data => {
                res.json({"Data removed":req.params.name})
            })
            .catch(err => res.json(err));
    },
    retrieveTitle: function (req, res) {
        console.log("Retrieve one document");
        Task.find({ title: req.params.title })
            .then(data => {
                res.json({ data: data[0] })
            })
            .catch(err => res.json(err));
    },

    newtask: function (req, res) {
        console.log("Add a new record/document");
        _newtask = req.body;
        console.log("---------------------------");
        console.log(_newtask);
        task = new Task(_newtask);
        task.save()
            .then(saveResult => res.json(saveResult))
            .catch(err => {
                console.log("Error creating a new Task record");
                res.json(err);
            });
    }

}