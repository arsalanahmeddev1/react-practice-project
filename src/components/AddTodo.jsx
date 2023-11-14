import React from 'react'

const AddTodo = () => {
  return (
    <div className="flex justify-center">
      <input type="text" placeholder='Enter Todo Here' className='border border-[black]' />
      <input type="date" className='border border-[black] ms-[10px]' />
      <button className='bg-[green] px-[30px] py-[10px] rounded-md text-[white] ms-[10px]'>Add</button>
    </div>
  )
}

export default AddTodo