import {TodoItem} from '../components'
const TodoItems = ({todoItems}) => {
  return (
    <>
    {
      todoItems.map((item) => {
        return (
          <div key={item.id}>
            <TodoItem  todoTitle={item.name} todoDate={item.date}/>
          </div>
        )
      })
    }
    </>
  )
}

export default TodoItems