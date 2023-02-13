import React, {useState} from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import { Todo } from "./components/modules/Todo";
import TodosPresentations from "./components/TodosPresentation";

function App() {
  const [todos, setTodos] = useState<Todo[]>([])


  return (
    <div className="App">
     <h1>Hello from typescript-todo</h1>
     <NewTodo todos={todos} setTodos={setTodos}/>
     <TodosPresentations todos={todos}/>

    
    </div>
  );
}

export default App;
