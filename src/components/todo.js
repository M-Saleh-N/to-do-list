import React,{useState} from "react";
import '../styles/todo.css'

function Todolist (){
  const [items, setItems] = useState([]);
  const [checked, setChecked] = useState({});
  const [input, setInput] = useState("");

  const addItem = () => {
    if (!input.trim()) return;
    setItems([...items, input.trim()]);
    setInput("");
  };

  const toggleCheck = (item) => {
    setChecked((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const deleteItem = (itemToDelete) => {
    setItems(items.filter((item) => item !== itemToDelete));
    setChecked((prev) => {
      const newChecked = { ...prev };
      delete newChecked[itemToDelete];
      return newChecked;
    });
}

    return(
    <div className="todo-container">
      <h1>TO-DO LIST📃</h1>
      <h2>Add your tasks for today</h2>

    <div className="input-section">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Enter a new task"
      />
      <button onClick={addItem}>Add➕</button>
      </div>

      <ul className="task-list">
        {items.map((item, index) => (
          <li key={index}  className="task-item">
            <span 
             onClick={() => toggleCheck(item)}
              style={{
                textDecoration: checked[item] ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
            {item} 
            </span>
            
            { <button onClick={() => deleteItem(item)}className="delete-btn">
            Delete ❌
            </button>}
          </li>
        ))}
      </ul>
      
    </div>
    );

}

export default Todolist;