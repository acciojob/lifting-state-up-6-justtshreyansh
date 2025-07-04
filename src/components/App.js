import React, { useState } from "react";
import ToDoList from "./ToDoList";

const initialTodos = [
  { task: "Learn React", status: false },
  { task: "Build a React app", status: false },
  { task: "Deploy the React app", status: false },
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);

  const handleComplete = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, status: true } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Parent component</h1>
      <ToDoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
