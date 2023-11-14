// import styles from './style'
import { useState } from 'react'
import { Header, TodoAdd, TodoItems, } from './components'
const App = () => {

  const [addTodo, setTodo] = useState()
  return (
    <div className={``}>
      <Header />
      <div className='container mt-[30px] m-auto w-[100%]'>
        <TodoAdd/>
        <TodoItems />
      </div>
    </div>
  )
}

export default App