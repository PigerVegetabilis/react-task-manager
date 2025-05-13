import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskBlock from './TaskBlock.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>to do list</h1>
      <div className="input-zone">
        <input type="text"></input>
        <button>add task</button>
      </div>
      <div className="task-zone">
        <TaskBlock title="to do" />
        <TaskBlock title="in progress" />
        <TaskBlock title="done" />
      </div>
    </>
  )
}

export default App
