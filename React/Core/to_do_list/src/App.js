import './App.css';
import ToDo from './components/ToDo';
import AddItemForm from './components/AddItemForm';
import React, { useState } from 'react';

function App() {

  const [toDos, setToDos] = useState([])

  const addItem = (item) => {
    setToDos([item, ...toDos])
  }

  const deleteItem = (targetItemIndex) => {
    setToDos(toDos.filter((item, i) => i !== targetItemIndex))
  }


  const toggle = (idx) => {
    setToDos(toDos.map((item, i) => {
      if (i === idx) {
        item.isComplete = !item.isComplete
      }
      
      return item
    }))
  }

  return (
    <div className="App">
      <AddItemForm addItem={addItem} />
      <ToDo list={toDos} deleteItem={deleteItem} toggle={toggle} />
    </div>
  );
}

export default App;
