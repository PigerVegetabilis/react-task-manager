import './index.css'
import './TaskBlock.css'
import './TaskItem.jsx'
import TaskItem from './TaskItem.jsx';

function TaskBlock({title, tasks = []}){
    return(
        <div className="task-block">
        <h2>{title}</h2>
        <hr/>
        <div className="tasks-container">
            {tasks.map(task => (
          <TaskItem key={task.id} text={task.text} />
        ))}
        </div>
        </div>
    );
}

export default TaskBlock;