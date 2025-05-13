import './TaskItem.css'
import './index.css'

function TaskItem({text}){
    return(
        <div className="task-item">
            {text}
        </div>
    )
}

export default TaskItem;