import React from 'react';

const ToDoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <h1>Child component</h1>
      <ul>
        {todos.map((ele, index) => (
          <li key={index}>
            <p>{ele.task}</p>
            {!ele.status && (
              <button onClick={() => handleComplete(index)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
