import { createSlice } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, editTodo, fetchTodo } from "../thunks/todoThunk";

const todoSlice = createSlice({
    name : 'todo',
    initialState : {
        data : []
    },
    extraReducers(builder){
        builder.addCase(fetchTodo.fulfilled, (state, action) => {
            state.data = action.payload;
        })

        builder.addCase(addTodo.fulfilled, (state, action) => {
            state.data.push(action.payload);
        })

        builder.addCase(editTodo.fulfilled, (state, action) => {
            state.data = state.data.map(todo => {
                if(todo.id === action.payload.id){
                    return {...todo, ...action.payload}
                }
                return todo
            })
        })

        builder.addCase(deleteTodo.fulfilled, (state, action) => {
            state.data = state.data.filter(todo => todo.id !== action.payload)
        })
        builder.addCase(fetchTodo.pending, (state, action) => {
            console.log('fetch/todo pending');
        })
        builder.addCase(fetchTodo.rejected, (state, action) => {
            console.log('fetch/todo rejected');
        })
    }
})

export const todoReducer = todoSlice.reducer;