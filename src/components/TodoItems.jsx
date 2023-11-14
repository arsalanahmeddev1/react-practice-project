import React from 'react'

const TodoItems = () => {
    const todoItems = [
        {
          title: 'todo added',
          date: '11/11/23',
          btn: 'delete',
          id: 1,
        },
        {
          title: 'todo added',
          date: '11/11/23',
          btn: 'delete',
          id: 2,
        },
      ]
    return (
        <>
            {
                todoItems.map((item) => {
                    return (
                        <div key={item.id} className='flex gap-[20px] justify-center mt-[40px] items-center'>
                            <h3 className=''>{item.title}</h3>
                            <h3>{item.date}</h3>
                            <button className='bg-[red] text-[#fff] px-[30px] py-[5px]'>{item.btn}</button>
                        </div>
                    )

                })
            }
        </>
    )
}

export default TodoItems