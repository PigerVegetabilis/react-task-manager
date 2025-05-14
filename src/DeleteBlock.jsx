import './DeleteBlock.css'
import { useDroppable } from '@dnd-kit/core';
function DeleteBlock(){
    const { setNodeRef, isOver } = useDroppable({
        id: 'delete',
    });

    return(
        <div 
        ref={setNodeRef}
        className={`delete-block ${isOver ? 'active' : ''}`}
        >
            delete
        </div>
    );
}

export default DeleteBlock;