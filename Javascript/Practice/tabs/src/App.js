import Tabs from './components/Tabs';
import Message from './components/Message';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [message,setMessage] = useState("")
  const tabsArrObj = [{label:"Tab 1", msg: "message 1"},{label:"Tab 2", msg: "message 2"}, {label:"Tab 3", msg: "message 3"}]
  const currentMessage = (msg) => {
    setMessage(msg)
  }


  return (
    <div className="App">
    {/* <Tabs tabsArr={tabsArrObj}/> */}
    <Tabs tabsArr={tabsArrObj} currentMessage={currentMessage}/>
    <Message msg={message}/>

    </div>
  );
}

export default App;
