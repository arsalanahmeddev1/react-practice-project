import { useState } from "react";

const AddTodo = ({addNewTodo}) => {
  const [todoName, setTodoName] = useState()
  const [dueDate, setDueDate] = useState()
  const handletodoNameChange = (event) => {
    setTodoName(event.target.value);
  }
  const handletodoDateChange = (event) => {
    setDueDate(event.target.value);
  }
  return (
    <div className="flex justify-center">
      <input type="text" placeholder='Enter Todo Here'  className='border border-[black]' onChange={handletodoNameChange}/>
      <input type="date" className='border border-[black] ms-[10px]' onChange={handletodoDateChange}/>
      <button className='bg-[green] px-[30px] py-[10px] rounded-md text-[white] ms-[10px]' onClick={()=> addNewTodo('a','b')}>Add</button>
    </div>
  )
}

export default AddTodo;