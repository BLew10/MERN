import React, { useState } from 'react';

const Tabs = (props) => {
    const [msg, setMsg] = useState("")
    const tabs = props.tabsArr

    const onClickHandler = (e, message) => {
        setMsg(message)
        props.currentMessage(message)
    }

    return (tabs.map((message) => {

        return (

            <button onClick={(e) => onClickHandler(e, message.msg)} className='mx-1 px-2 font-bold border-2 border-slate-500 focus:bg-indigo-500'>{message.label}</button>
        )

    })
    )

}

export default Tabs

