import React, {FormEvent} from 'react'
import { Todo } from './modules/Todo'

type NewTodoProps = {

    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}

const NewTodo:React.FC<NewTodoProps> =(props) =>{

const todoHandler = (event:FormEvent<HTMLFormElement>) => {

  event.preventDefault()
  const todoText = event.currentTarget.items.value
  const newTodos = {
    text: todoText,
    id: Math.floor(Math.random() *1000)
  }

  props.setTodos([...props.todos, newTodos])

  event.currentTarget.items.value = ""
 }



  return (
    <form onSubmit={todoHandler} className='todo-form'>
      <input name="items" type="text"/>
      <button  type="submit">Submit</button>

    </form>

  )
}

export default NewTodo

