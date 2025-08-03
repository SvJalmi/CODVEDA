import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import { generateSuggestions } from '../ai';
import { Task } from '../types';

const Home: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [suggestions, setSuggestions] = useState<string[]>([]);

    useEffect(() => {
        const fetchSuggestions = async () => {
            const newSuggestions = await generateSuggestions();
            setSuggestions(newSuggestions);
        };

        fetchSuggestions();
    }, []);

    const addTask = (task: Task) => {
        setTasks([...tasks, task]);
    };

    const removeTask = (taskId: string) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const updateTask = (updatedTask: Task) => {
        setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    };

    return (
        <div className="home">
            <h1>SmartTaskPro</h1>
            <TaskList tasks={tasks} onAddTask={addTask} onRemoveTask={removeTask} onUpdateTask={updateTask} />
            {suggestions.length > 0 && (
                <div className="suggestions">
                    <h2>Suggestions for you:</h2>
                    <ul>
                        {suggestions.map((suggestion, index) => (
                            <li key={index}>{suggestion}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Home;