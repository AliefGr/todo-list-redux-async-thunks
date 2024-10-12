import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../store/thunks/todoThunk";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => {
    return state.todos.data
  })
  useEffect(() => {
    dispatch(fetchTodo())
  }, [])
  
  return (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          );
        })}
      </ul>
    </>
  );
};
export default TodoList;
