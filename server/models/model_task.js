const mongoose = require('mongoose');

// Task Schema and Task Model:
const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 3 },
    description: { type: String, required: true, minlength: 3 },
    completed: { type: Boolean, required: true },
    }, { timestamps: true });
const Task = mongoose.model('tasks', TaskSchema);

//Exports:
module.exports = {
    Task: Task,
};