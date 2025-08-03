import React, { useState } from 'react';
import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
  onAddTask: (task: Task) => void;
  onRemoveTask: (taskId: string) => void;
  onUpdateTask: (updatedTask: Task) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onAddTask, onRemoveTask, onUpdateTask }) => {
  const [newTask, setNewTask] = useState<string>('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        title: newTask,
        completed: false,
      };
      onAddTask(task);
      setNewTask('');
    }
  };

  const handleUpdateTask = (task: Task) => {
    onUpdateTask({ ...task, completed: !task.completed });
  };

  return (
    <div className="task-list">
      <h2>Task List</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              onClick={() => handleUpdateTask(task)}
            >
              {task.title}
            </span>
            <button onClick={() => onRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;