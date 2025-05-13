import './index.css'
import './TaskBlock.css'

function TaskBlock({title}){
    return(
        <div className="task-block">
        <h2>{title}</h2>
        <hr/>
        </div>
    );
}

export default TaskBlock;