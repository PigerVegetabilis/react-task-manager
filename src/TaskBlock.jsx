import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import './index.css'
import './TaskBlock.css'
import './TaskItem.jsx'
import TaskItem from './TaskItem.jsx';

function TaskBlock({title, tasks = [], status, activeTask}){
    const { setNodeRef } = useDroppable({
    id: status,
    data: { status }
    });

    return(
        <div className="task-block" ref={setNodeRef}>
        <h2>{title}</h2>
        <hr/>
        <div className="tasks-container">
            <SortableContext
                items={tasks.map(task => task.id)}
                strategy={verticalListSortingStrategy}
            >
                {tasks.map(task => (
                    <TaskItem key={task.id} text={task.text} id={task.id} status={task.status} 
                    isDragging={activeTask && activeTask.id === task.id}/>
                ))}
            </SortableContext>
            
        
        </div>
        </div>
    );
}

export default TaskBlock;