import './TaskItem.css'
import './index.css'
import { useDraggable } from '@dnd-kit/core';

function TaskItem({id, text, status, isDragging}){
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id,
        data: { status }
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        zIndex: 1000,
        width: '100%',
        position: 'absolute'
    } : undefined;

    return(
        <div 
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className={`task-item${isDragging ? ' dragging' : ''}`}
        >
            {text}
        </div>
    )
}

export default TaskItem;