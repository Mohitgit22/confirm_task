import React, { useState } from 'react';
import { addTask } from './api';

const TaskForm = ({ onTaskAdded }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newTask = {
            name: taskName,
            description: taskDescription,
            completed: false, // Default to false when a task is added
        };

        const addedTask = await addTask(newTask);
        if (addedTask) {
            onTaskAdded(addedTask);
            setTaskName('');
            setTaskDescription('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-form mb-8 p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add a New Task</h2>
            <div className="mb-4">
                <label htmlFor="taskName" className="block text-sm font-medium text-gray-700 mb-2">Task Name</label>
                <input
                    id="taskName"
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    placeholder="Enter task name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="taskDescription" className="block text-sm font-medium text-gray-700 mb-2">Task Description</label>
                <textarea
                    id="taskDescription"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    placeholder="Describe the task in detail"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                    required
                ></textarea>
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white text-lg font-semibold py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            >
                Add Task
            </button>
        </form>
    );
};

export default TaskForm;

