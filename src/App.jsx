import { useState } from 'react'
import { DndContext, DragOverlay, closestCorners } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskBlock from './TaskBlock.jsx'

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        text: inputValue,
        status: 'to do'
      }]);
      setInputValue('');
    }
  };

  return (
    <>
      <h1>to do list</h1>
      <div className="input-zone">
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
        />
        <button>add task</button>
      </div>
      <div className="task-zone">
        <TaskBlock 
          title="to do"
          tasks={tasks.filter(task => task.status === 'to do')}
        />
        <TaskBlock 
          title="in progress" 
          tasks={tasks.filter(task => task.status === 'in progress')}
        />
        <TaskBlock 
          title="done" 
          tasks={tasks.filter(task => task.status === 'done')}
        />
      </div>
    </>
  )
}

export default App
