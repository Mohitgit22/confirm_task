const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
