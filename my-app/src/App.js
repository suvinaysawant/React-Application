import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
function App() {

  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])

  function createTodo(){
    setTodos(oldTodos =>{
      return [...oldTodos,task]
    })
  }
  
  return (
    <div>
      <h1>To Do App</h1>
      <input type="text" value={task} onChange={event =>{
        setTask(event.target.value)
      }}
      />
      <button onClick={createTodo}>Create Todo</button>
   
      <ul>
        {todos.map(todo => {
        return <li>{todo}</li>
         } )}
      </ul>
    </div>
  );
}

export default App;
