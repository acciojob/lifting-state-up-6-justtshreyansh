import React, { useState } from 'react';
import ToDoList from './ToDoList'; // Adjust the path if necessary

const App = () => {
    const [todos, setTodos] = useState([
        { id: 1, task: "Task 1", completed: false },
        { id: 2, task: "Task 2", completed: false },
        { id: 3, task: "Task 3", completed: false },
    ]);

    const handleComplete = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: true } : todo
            )
        );
    };

    return (
        <div>
            <h1>Todo App</h1>
            <ToDoList todos={todos} handleComplete={handleComplete} />
        </div>
    );
};

export default App;