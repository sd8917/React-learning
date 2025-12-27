import React, { useState } from 'react';
import "./main.css";
import Input from '../UI/input';
import Button from '../UI/button';
import useLocalstorage from '../hooks/useLocalstorage';

const AddTodo = () => {
    const [taskInput, setTaskInput] = useState('');
    const [tasks, setTasks] = useLocalstorage('tasks', []);

    const onChangeHandler = (e) => {
        if (e.target.type === 'text') {
            setTaskInput(e.target.value);
        }
    };

    const addTask = () => {
        if (taskInput.trim()) {
            const newTask = {
                id: Date.now(),
                title: taskInput,
                status: "pending",
                isDelete: false
            };
            setTasks([...tasks, newTask]);
            setTaskInput('');
        }
    };

    return (
        <div className='form'>
            <Input
                type={"text"}
                placeholder={"Enter task"}
                onChangeHandler={onChangeHandler}
                value={taskInput}
            />
            <Button name={"Add"} onClick={addTask} />
        </div>
    );
};

export default AddTodo;
