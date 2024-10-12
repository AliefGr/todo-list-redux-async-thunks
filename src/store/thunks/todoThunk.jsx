import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addTodo = createAsyncThunk("todos/add", async (todo) => {
    const response = await axios.post('http://localhost:5001/todos', todo)
    return response.data
})
export const editTodo = createAsyncThunk("todos/edit", async (data) => {
    const response = await axios.put(`http://localhost:5001/todos/${data.id}`, data)
    return response.data
})
export const deleteTodo = createAsyncThunk("todos/delete", async (id) => {
    await axios.delete(`http://localhost:5001/todos/${id}`)
    return id
})
export const fetchTodo = createAsyncThunk("todos/fetch", async () => {
    const response = await axios.get('http://localhost:5001/todos');
    return response.data
})



