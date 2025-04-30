import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, markAsDone } from "../features/todo/todoSlice";
import { useState } from "react";

export default function Todo() {
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    const handleAdd = () => {
        if (input.trim()) {
            dispatch(addTodo(input));
            setInput("");
        }
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter task" />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
                            {todo.task}
                        </span>
                        <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                        {!todo.isDone && (
                            <button onClick={() => dispatch(markAsDone(todo.id))}>Done</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
