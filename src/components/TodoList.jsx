import React from 'react';
import "./main.css";
import Button from '../UI/button';
import useLocalstorage from '../hooks/useLocalstorage';

const TodoList = () => {
    const [tasks, setTasks] = useLocalstorage('tasks', []);

    const toggleTaskStatus = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, status: task.status === 'pending' ? 'completed' : 'pending' } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className='list'>
            {tasks.map((task) => (
                <div className='row-item' key={task.id}>
                    <div>{task.title}</div>
                    <div>{task.status}</div>
                    <Button
                        name={task.status === 'pending' ? "Mark as done" : "Mark as pending"}
                        onClick={() => toggleTaskStatus(task.id)}
                    />
                    <Button name={"Delete"} onClick={() => deleteTask(task.id)} />
                </div>
            ))}
        </div>
    );
};

export default TodoList;
