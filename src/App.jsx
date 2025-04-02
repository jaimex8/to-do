import { useState } from 'react'
import Todo from './components/Todo.jsx';
import './App.css'

function App() {

  return (
    <>      
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        <Todo name="Eat" id="todo-0" completed />
        <Todo name="Sleep" id="todo-1" />
        <Todo name="Repeat" id="todo-2" />
      </ul>

    </>
  )
}

export default App
