import { GrClose } from "react-icons/gr"
import { editTodo, deleteTodo } from "../store/thunks/todoThunk"
import { useDispatch } from "react-redux"

const TodoItem = ({todo}) => {

    const dispatch = useDispatch();

    const handleEdit  = () => {
        const editedTodo = {...todo, completed : !todo.completed}
        dispatch(editTodo(editedTodo))
    }
    const handleDelete = () => {
        dispatch(deleteTodo(todo.id))
    }
  return (
        <li className={`todo-item ${todo.completed  ? 'checked' : ''}`}>
            <div onClick={handleEdit} className="todo-text text-white">{todo.text}</div>
            <div onClick={handleDelete} className="todo-delete"><GrClose/></div>
        </li>
  )
}
export default TodoItem