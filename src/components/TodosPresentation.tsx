import React from 'react'
import { Todo } from './modules/Todo'

type PresentationProps ={
    todos: Todo[],
    
}
const TodosPresentation: React.FC<PresentationProps> = (props) =>
 {
  return (
    <div>
        {
            props.todos.map((item) =>{
                return <div key={item.id}>
                     {item.text}
                </div>
            })
        }

    </div>
  )
}

export default TodosPresentation