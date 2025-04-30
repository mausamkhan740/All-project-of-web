import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
    reducer: {
        todos: todoReducer, // key should match the slice's name or expected state
    },
});
