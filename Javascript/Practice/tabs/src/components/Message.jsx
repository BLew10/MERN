import React from 'react'

const Message = (props) => {
    return (
        <div>
            <p className='transition ease-in-out delay-500 '>{props.msg}</p>
        </div>
    )
}

export default Message