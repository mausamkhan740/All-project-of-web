import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [{ id: "abc", task: "demo-task", isDone: false }]
};

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now().toString(), // generate unique id
                task: action.payload,
                isDone: false,
            };
            state.todos.push(newTodo);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        markAsDone: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, isDone: true };
                }
                return todo;
            });
        },
    },
});

export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;
export default todoSlice.reducer;
