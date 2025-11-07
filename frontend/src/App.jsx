import { useState } from "react"
import { CreateTodo } from "./Components/CreateTodo"
import { Todos } from "./Components/Todos"

function App() {
  const [todoing, settodo] = useState([]);

  fetch("http://localhost:3000/todos")
    .then(async (res) => {
      const json = await res.json();
      settodo(json.todoing)
    })
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={[{
        title: todoing.title,
        description: todoing.description,
        completed: todoing.completed,
      }]}></Todos>
    </div >
  )
}

export default App