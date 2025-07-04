import React from 'react';

const ToDoList = ({ todos, handleComplete }) => {
    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map((ele) => (
                    <li key={ele.id}>
                        <p>{ele.task}</p>
                        {!ele.completed && (
                            <button onClick={() => handleComplete(ele.id)}>
                                Complete
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;