import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

let globalID = 0;

function App() {

  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])

  function createTodo(){
    setTodos(oldTodos => {
      setTask('')
      return [...oldTodos, {todo: task, id: globalID++ }]
    })
  }

  function tryToCheckForEnterKey(e) {

    if(e.keyCode === 13){
      createTodo()
    }
  }

  function deleteItem(itemID) {
      setTodos(oldTodos => oldTodos.filter(item => item.id !== itemID))

  }
  
  return (
    <div className="container">
      <div className='headName'>
      <h1>To Do App</h1>
      </div>
      <input
      className='textbox'
          onKeyDown={tryToCheckForEnterKey}
          type="text" 
         value={task}
         onChange={event =>{
         setTask(event.target.value)
      }}
      />
      <button onClick={createTodo} className='button'>Create Todo</button>
      <div className='box'>
      <ul>
        {todos.map((item, index) => {
        return <div className='containerD' key={item.id}>
        <li>{item.todo}</li>
        <button className='button-2' onClick= {() => deleteItem(item.id)}> Delete</button>
        </div>
         }) }
      </ul>
      </div>
    </div>
  );
}

export default App;
