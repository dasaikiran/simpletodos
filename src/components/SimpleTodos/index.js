import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'

import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {todoItemsList: initialTodosList, newTodoVal: ''}

  componentDidMount = () => {
    this.modifyTodoList()
  }

  modifyTodoList = () => {
    const {todoItemsList} = this.state
    const newTodoList = todoItemsList.map(item => ({
      id: uuidV4(),
      title: item.title,
    }))
    this.setState({
      todoItemsList: newTodoList,
    })
  }

  onDelete = id => {
    const {todoItemsList} = this.state
    const newTodoList = todoItemsList.filter(item => item.id !== id)
    this.setState({todoItemsList: newTodoList})
  }

  onInputChange = event => {
    this.setState({
      newTodoVal: event.target.value,
    })
  }

  onAddClick = () => {
    const {newTodoVal, todoItemsList} = this.state
    const val = newTodoVal
    const valList = val.split(' ')
    const num = parseInt(valList[valList.length - 1])
    console.log(num)
    if (num.isNaN) {
      const obj = {
        id: uuidV4(),
        title: newTodoVal,
      }
      const newTodoList = [...todoItemsList, obj]
      console.log(newTodoList)
      this.setState({
        todoItemsList: newTodoList,
      })
    } else {
      const todoVal = valList.slice(0, valList.length - 1).join(' ')
      const li = []
      for (let i = 0; i < num; i += 1) {
        const obj = {
          id: uuidV4(),
          title: todoVal,
        }
        li.push(obj)
      }
      const newTodoList = [...todoItemsList, ...li]
      this.setState({
        todoItemsList: newTodoList,
      })
    }
  }

  onEditValue = (id, val) => {
    const {todoItemsList} = this.state
    const newTodoList = todoItemsList.map(item => {
      if (item.id === id) {
        const obj = {
          id,
          title: val,
        }
        return obj
      }
      return item
    })
    this.setState({
      todoItemsList: newTodoList,
    })
  }

  render() {
    const {todoItemsList, newTodoVal} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Simple Todos</h1>
          <div>
            <input
              onChange={this.onInputChange}
              type="text"
              value={newTodoVal}
              className="input"
            />
            <button
              onClick={this.onAddClick}
              className="add-button"
              type="button"
              aria-label="addButton"
            >
              Add
            </button>
          </div>
          <ul className="todo-container">
            {todoItemsList.map(item => (
              <TodoItem
                listObject={item}
                key={item.id}
                onDelete={this.onDelete}
                onEditVal={this.onEditValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
