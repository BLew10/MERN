import React, { useState } from 'react'

const AddItemForm = (props) => {

    const [newItem, setNewItem] = useState({item: "", isComplete: false})

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addItem({item: newItem, isComplete: false})
        setNewItem({item: "", isComplete: false})
    }
    return (
        <form onSubmit={handleSubmit} className='w-1/2 flex justify-between mx-auto'>
            <input type="text" placeholder='Add item' className='border-2' onChange={(e) => {setNewItem(e.target.value)}} value={newItem.item} id="newItem"/>
            <button className='px-2 py-2 bg-blue-300'>Add</button>
        </form>
)
}

export default AddItemForm