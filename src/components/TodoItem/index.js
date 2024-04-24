// Write your code here
import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {edit: true, editVal: '', checked: false}

  onSaveClick = () => {
    const {editVal} = this.state
    const {listObject, onEditVal} = this.props
    const {id} = listObject
    onEditVal(id, editVal)
    this.setState({
      edit: true,
    })
  }

  onEditClick = () => {
    const {listObject} = this.props
    const {title} = listObject
    this.setState({
      edit: false,
      editVal: title,
    })
  }

  onEditChange = event => {
    this.setState({
      editVal: event.target.value,
    })
  }

  onChangeCheckbox = () => {
    this.setState(prev => ({checked: !prev.checked}))
  }

  render() {
    const {edit, editVal, checked} = this.state
    const {listObject, onDelete} = this.props
    const {id, title} = listObject
    const ondeleteFun = () => {
      onDelete(id)
    }
    return (
      <li className="todo-item">
        <input
          type="checkbox"
          onChange={this.onChangeCheckbox}
          className="checkbox"
        />
        <div className="data-container">
          {edit ? (
            <p className={`para ${checked ? 'check' : null}`}>{title}</p>
          ) : (
            <input
              onChange={this.onEditChange}
              value={editVal === '' ? title : editVal}
              type="text"
              className="text-input"
            />
          )}
          {edit ? (
            <button onClick={this.onEditClick} className="button" type="button">
              Edit
            </button>
          ) : (
            <button onClick={this.onSaveClick} className="button" type="button">
              Save
            </button>
          )}
        </div>

        <button type="button" className="button delete" onClick={ondeleteFun}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
