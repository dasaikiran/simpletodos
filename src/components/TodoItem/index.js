// Write your code here
import './index.css'

const TodoItem = crops => {
  const {listObject, onDelete} = crops
  const {id, title} = listObject
  const ondeleteFun = () => {
    onDelete(id)
  }
  return (
    <li className="todoItem">
      <p className="para">{title}</p>
      <button className="button" onClick={ondeleteFun}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
