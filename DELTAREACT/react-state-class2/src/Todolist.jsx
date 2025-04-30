import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todolist() {
  const [todos, setTodos] = useState([{ task: "Simple Task", id: uuidv4() }]);
  const [input, setInput] = useState("");

  
  const addTask = () => {
    if (input.trim() !== "") {
      const newTask = { task: input.trim(), id: uuidv4() };
      setTodos([...todos, newTask]);
      setInput("");
    }
  };

  
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <hr />
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
