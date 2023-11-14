import styles from './style'
import { Header, AppName, AddTodo, TodoItems } from './components'

const App = () => {
let todoItems = [
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
  return (
    <>
      <Header />
      <center className='mt-[40px] '>
        <AppName />
      </center>
      <AddTodo />
      <TodoItems todoItems={todoItems}/>

    </>
  )
}

export default App