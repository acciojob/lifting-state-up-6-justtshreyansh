
import React, { useState } from "react";
import './../styles/App.css';
import ToDoList from "./ToDoList";
const arr = [{task:"Learn React",status:false},{task:"Build a React app",status:false},{task:"Deploy the React app",status:false},]
const App = () => {
  const[todos,setTodos] = useState(arr);
  const handleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].status = true;  // mark complete
    setTodos(newTodos);
    console.log("clicked")
  };
  return (
    <div>
      <h1>Parent component</h1>
      <ToDoList todos={todos} handleComplete={handleComplete}/>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
