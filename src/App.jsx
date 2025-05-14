import { useState } from 'react'
import { DndContext, DragOverlay, closestCorners } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import './App.css'
import TaskBlock from './TaskBlock.jsx'
import TaskItem from './TaskItem.jsx';
import DeleteBlock from './DeleteBlock.jsx';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [activeTask, setActiveTask] = useState(null);

  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, {
        id: Date.now().toString(),
        text: inputValue,
        status: 'to do'
      }]);
      setInputValue('');
    }
  };

  const handleDragStart = (event) => {
    const { active } = event;
    setActiveTask(tasks.find(task => task.id === active.id));
  };

  const handleDragOver = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeStatus = active.data.current?.status;
    const overStatus = over.data.current?.status;

    if (activeStatus !== overStatus) {
      setTasks(tasks.map(task => {
        if (task.id === active.id) {
          return { ...task, status: overStatus };
        }
        return task;
      }));
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over?.id === 'delete') {
      if (window.confirm('Удалить задачу?')) {
        setTasks(tasks.filter(task => task.id !== active.id));
      }
    }
    if (!over) return;

    setActiveTask(null);
  };

  return (
    <DndContext
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="app">
      <h1>to do list</h1>
      <div className="input-zone">
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
        />
        <button onClick={handleAddTask}>add task</button>
      </div>
      <div className="task-zone">
        <TaskBlock 
          title="to do"
          tasks={tasks.filter(task => task.status === 'to do')}
          status= "to do"
          activeTask={activeTask}
        />
        <TaskBlock 
          title="in progress" 
          tasks={tasks.filter(task => task.status === 'in progress')}
          status= "in progress"
          activeTask={activeTask}
        />
        <TaskBlock 
          title="done" 
          tasks={tasks.filter(task => task.status === 'done')}
          status= "done"
          activeTask={activeTask}
        />
      </div>
      <DeleteBlock/>
        <DragOverlay>
          {activeTask ? (
            <TaskItem
              id={activeTask.id}
              text={activeTask.text}
              style={{
                opacity: 0.8,
                transform: 'scale(1.05)',
                boxShadow: '0 0 10px rgba(0,0,0,0.2)',
                pointerEvents: 'none'
              }}
            />
          ) : null}
        </DragOverlay>
      </div>
    </DndContext>
    
  );
}

export default App
