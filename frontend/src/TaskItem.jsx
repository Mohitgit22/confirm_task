// import React from 'react';
// import { completeTask } from './api';

// const TaskItem = ({ task, onDelete, onComplete }) => {
//     // Handle task deletion
//     const handleDelete = () => {
//         onDelete(task._id);
//     };

//     // Handle task completion via checkbox
//     const handleCheckboxChange = async () => {
//         const updatedTask = await completeTask(task._id);
//         if (updatedTask) {
//             onComplete(updatedTask);  // Notify parent to update task state
//         }
//     };

//     return (
//         <div className="task-item flex justify-between items-center p-4 bg-gray-100 rounded-md mb-2">
//             <div className="task-content flex items-center space-x-3">
//                 {/* Checkbox to mark task as complete */}
//                 <input
//                     type="checkbox"
//                     checked={task.completed}
//                     onChange={handleCheckboxChange}
//                     className="checkbox"
//                 />
//                 <div className="flex-1">
//                     {/* Conditionally apply line-through style if the task is completed */}
//                     <h3 className={`text-lg ${task.completed ? 'line-through' : ''}`}>
//                         {task.name}
//                     </h3>
//                     <p>{task.description}</p>
//                 </div>
//             </div>
//             <div className="task-actions flex space-x-2">
//                 {/* If the task is not yet completed, show the "Complete" button */}
//                 {!task.completed && (
//                     <button
//                         onClick={handleCheckboxChange}
//                         className="bg-green-500 text-white px-3 py-1 rounded-md"
//                     >
//                         Complete
//                     </button>
//                 )}
//                 <button
//                     onClick={handleDelete}
//                     className="bg-red-500 text-white px-3 py-1 rounded-md"
//                 >
//                     Delete
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default TaskItem;



import React from 'react';
import { completeTask } from './api';

const TaskItem = ({ task, onDelete, onComplete }) => {
    // Handle task deletion
    const handleDelete = () => {
        onDelete(task._id);
    };

    // Handle task completion via checkbox
    const handleCheckboxChange = async () => {
        const updatedTask = await completeTask(task._id);
        if (updatedTask) {
            onComplete(updatedTask);  // Notify parent to update task state
        }
    };

    return (
        <div className="task-item flex justify-between items-center p-5 bg-white rounded-lg shadow-md mb-4 transition-all hover:shadow-lg">
            <div className="task-content flex items-center space-x-4">
                {/* Checkbox to mark task as complete */}
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={handleCheckboxChange}
                    className="checkbox w-5 h-5 border-2 border-gray-400 rounded-sm transition-transform transform hover:scale-110"
                />
                <div className="flex-1">
                    {/* Conditionally apply line-through style if the task is completed */}
                    <h3 className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                        {task.name}
                    </h3>
                    <p className={`text-sm ${task.completed ? 'text-gray-500' : 'text-gray-700'}`}>{task.description}</p>
                </div>
            </div>
            <div className="task-actions flex space-x-3">
                {/* If the task is not yet completed, show the "Complete" button */}
                {!task.completed && (
                    <button
                        onClick={handleCheckboxChange}
                        className="bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-green-600"
                    >
                        Mark as Complete
                    </button>
                )}
                <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-red-600"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
