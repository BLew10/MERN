import React, { useState } from 'react'
import axios from 'axios';
import {
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom"


const PlayerForm = (props) => {
    const { errors } = props
    const navigate = useNavigate()
    const { initialFullName, initialPosition, onSubmitProp } = props
    //keep track of what is being typed via useState hook
    const [player, setPlayer] = useState({
        fullName: initialFullName,
        position: initialPosition,
        games:{
            1: {
                playing: false,
                notPlaying: false,
                undecided: true
            },
            2:{
                playing: false,
                notPlaying: false,
                undecided: true
            },
            3: {
                playing: false,
                notPlaying: false,
                undecided: true
            }

        }
    });
    //handler when the form is submitted

    const changeHandler = (e) => {
        setPlayer({ ...player, [e.target.name]: e.target.value })
    }
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        onSubmitProp(player)
    }



    return (
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p className='text-red-500 font-bold' key={index}>{err}</p>)}
            <p>
                <label>Full Name: </label><br />
                <input className='border-2 border-slate-300 rounded' type="text" onChange={(e) => changeHandler(e)} value={player.fullName} name="fullName" />
                {/* {errors ? <p className='text-red-500 font-bold' >{errors[0].message}</p> : null } */}
            </p>
            <p>
                <label>Preferred Position: </label><br />
                <input className='border-2 border-slate-300 rounded' type="text" onChange={(e) => changeHandler(e)} value={player.position} name="position" />
            </p>
            <input className='p-1 bg-cyan-300 rounded' type="submit" />
            <button className='p-1 bg-slate-300 rounded mx-2' onClick={() => navigate('/players')}>Cancel</button>
        </form>
    )
}

export default PlayerForm