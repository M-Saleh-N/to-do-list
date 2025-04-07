import React,{useState} from "react";
import '../styles/todo.css'

function Todolist (){
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState('')

    const addTask = () => {
        if (newTask !== '') {

        }
    };
    const deleteTask = (index) => {
        setTask(task.filter((task, i) => i !== index));
    };

    return(
        <div className="todo-container">
      <h1>TO-DO LIST📃</h1>
      <h2>Add your tasks for today</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}  // Update newTask state on input change
        placeholder="Enter a new task"
      />
      <button onClick={addTask}>Add➕</button>

      <ul className="task-list">
        {task.map((taskItem, index) => (
          <li key={index}>
            {taskItem} 
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    );

}

export default Todolist;