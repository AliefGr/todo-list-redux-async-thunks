import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./silces/todoSlice";

const store  = configureStore({
    reducer : {
        todos : todoReducer
    }
})

export {store}