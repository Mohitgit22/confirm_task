import { useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import { getTasks, deleteTask, completeTask } from './api.jsx';

function App() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the backend
  const fetchTasks = async () => {
    const tasksFromAPI = await getTasks();
    setTasks(tasksFromAPI);
  };

  // Handle task deletion
  const handleDelete = async (taskId) => {
    const deletedTask = await deleteTask(taskId);
    if (deletedTask) {
      setTasks(tasks.filter((task) => task._id !== taskId));
    }
  };

  // Handle task completion
  const handleComplete = async (updatedTask) => {
    // Find the task and update its status in the state
    setTasks(
      tasks.map((task) =>
        task._id === updatedTask._id ? { ...task, completed: true } : task
      )
    );
  };

  // Handle newly added tasks
  const handleTaskAdded = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Fetch tasks when component is mounted
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="app p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl mb-6 font-semibold">To-Do List</h1>

      {/* Task Form */}
      <TaskForm onTaskAdded={handleTaskAdded} />

      {/* Task List */}
      <div className="task-list">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              onDelete={handleDelete}
              onComplete={handleComplete}
            />
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </div>
    </div>
  );
}

export default App;
