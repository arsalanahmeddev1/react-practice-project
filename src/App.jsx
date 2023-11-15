import styles from './style'
import { Header, AppName, AddTodo, TodoItems } from './components'
import { useState } from 'react'

const App = () => {
  let initiallTodoItems = [
    {
      id: 1,
      name: 'buy milk',
      date: '11/11/23',
    },
    {
      id: 2,
      name: 'buy Egg',
      date: '12/11/23',
    },
    {
      id: 3,
      name: 'buy sugar',
      date: '13/11/23',
    },
  ]
  const [todoItems, setTodoItems] = useState(initiallTodoItems);

  const handleNewTodo = (todoName, dueDate) => {
    console.log(`new item added: ${todoName} Date:${dueDate}`);
  }

  return (
    <>
      <Header />
      <center className='mt-[40px]'>
        <AppName />
      </center>
      <AddTodo addNewTodo={handleNewTodo} />
      <TodoItems todoItems={todoItems} />

    </>
  )
}

export default App