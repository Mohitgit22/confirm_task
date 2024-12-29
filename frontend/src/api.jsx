import axios from 'axios';

const API_URL = 'http://localhost:5001/api/tasks';

export const getTasks = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        return [];
    }
};

export const addTask = async (taskData) => {
    try {
        const response = await axios.post(API_URL, taskData);
        return response.data;
    } catch (error) {
        console.error('Error adding task:', error);
        return null;
    }
};

export const deleteTask = async (taskId) => {
    try {
        const response = await axios.delete(`${API_URL}/${taskId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting task:', error);
        return null;
    }
};

// Function to mark a task as complete
export const completeTask = async (taskId) => {
    try {
        const response = await axios.patch(`${API_URL}/${taskId}`, { completed: true });
        return response.data;  // Return updated task
    } catch (error) {
        console.error('Error completing task:', error);
        return null;
    }
};
