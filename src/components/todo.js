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
    
}

export default Todolist;