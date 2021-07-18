import { observer } from "mobx-react"

export default observer(function Todo({todos}) {
  
  if (todos.length === 0) {
    return <div>
      <h2>할 일이 없습니다.</h2>
    </div>
  }
  
  return (
    <div>
      <ul>{todos.map((todo) => <li>{todo.text}</li>)}</ul>
    </div>
  )
});