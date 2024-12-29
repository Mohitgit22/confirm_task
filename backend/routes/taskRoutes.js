const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Create a new task
router.post('/', async (req, res) => {
    try {
        const { name, description } = req.body;
        const task = new Task({ name, description });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ message: 'Invalid task data' });
    }
});

// Delete a task
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Task.findByIdAndDelete(id);
        res.json({ message: 'Task deleted' });
    } catch (error) {
        res.status(404).json({ message: 'Task not found' });
    }
});

// Update task status
router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { completed } = req.body;
        const task = await Task.findByIdAndUpdate(id, { completed }, { new: true });
        res.json(task);
    } catch (error) {
        res.status(400).json({ message: 'Failed to update task' });
    }
});

module.exports = router;
