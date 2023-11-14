
const TodoItem = ( {todoTitle , todoDate }) => {
  return (
    <div className="flex justify-center items-center mt-[40px]">
      <h3>{todoTitle}</h3>
      <h5 className='ms-[10px]'>{todoDate}</h5>
      <button className='bg-[green] px-[30px] py-[10px] rounded-md text-[white] ms-[10px]'>Deltete</button>
    </div>
  )
}

export default TodoItem