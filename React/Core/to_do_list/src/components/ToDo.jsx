import React, { useState } from 'react'

const ToDo = (props) => {

    // const [list, setList] = useState([...props.list])

    const deleteItem = (index) => {
        props.deleteItem(index)
    }

    const handleCheck = (index) => {
        props.toggle(index)
    }



    return (
        <div>
            <h1>To Do List</h1>
            <ul>
                {props.list.map((item,i) => {
                    return (<li className='flex justify-around w-1/5 mx-auto items-center' key ={i}>
                        <div className='flex justify-start w-full mx-auto items-center'>{item.item}  <input  onChange ={() => handleCheck(i)} checked ={item.isComplete} type="checkbox" className='ml-2' /> </div>
                        <button className='bg-cyan-300 p-2 rounded text-white font-bold hover:bg-cyan-500' onClick={ () => deleteItem(i)} value={item.item}>Delete</button>
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default ToDo