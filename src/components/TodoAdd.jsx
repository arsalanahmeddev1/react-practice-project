
import React from 'react'

const TodoAdd = () => {
    function handleInput(event) {
        console.log(event.target.value);
    }
    function handleClick() {
        console.log('clicked');
    }
    return (
        <>
            <h1 className='text-center mb-[40px] text-[40px] font-medium'>Todo App</h1>
            <div className="flex justify-center">
                <input type="text" placeholder='Add Todo' onChange={handleInput} className='border border-[black] px-[10px] me-[20px]' />
                <input type="date" className='me-[10px] border border-[black] px-[10px]' />
                <button className='bg-black text-[#fff] px-[30px] py-[5px]' onClick={handleClick}>Add</button>
            </div>
        </>
    )
}

export default TodoAdd