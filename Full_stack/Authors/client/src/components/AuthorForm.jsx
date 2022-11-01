import React, { useState } from 'react'
import axios from 'axios';
import {
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom"


const AuthorForm = (props) => {
    const { errors } = props
    const navigate = useNavigate()
    const { initialFirstName, initialLastName, onSubmitProp } = props
    //keep track of what is being typed via useState hook
    const [author, setAuthor] = useState({
        firstName: initialFirstName,
        lastName: initialLastName
    });
    //handler when the form is submitted

    const changeHandler = (e) => {
        setAuthor({ ...author, [e.target.name]: e.target.value })
    }
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        onSubmitProp(author)
    }



    return (
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p className='text-red-500 font-bold' key={index}>{err}</p>)}
            <p>
                <label>First Name: </label><br />
                <input className='border-2 border-slate-300 rounded' type="text" onChange={(e) => changeHandler(e)} value={author.firstName} name="firstName" />
                {/* {errors ? <p className='text-red-500 font-bold' >{errors[0].message}</p> : null } */}
            </p>
            <p>
                <label>Last Name: </label><br />
                <input className='border-2 border-slate-300 rounded' type="text" onChange={(e) => changeHandler(e)} value={author.lastName} name="lastName" />
            </p>
            <input className='p-1 bg-cyan-300 rounded' type="submit" />
            <button className='p-1 bg-slate-300 rounded mx-2' onClick={() => navigate('/authors')}>Cancel</button>
        </form>
    )
}

export default AuthorForm