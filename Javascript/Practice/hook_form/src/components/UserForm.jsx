import React, { useState } from 'react';
import styles from './UserForm.module.css';

const UserForm = props => {

    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password:"",
        confirmPassword: ""
    })


    const createUser = (e) => {
        e.preventDefault()
        const newUser =  inputs 
        console.log("Welcome", newUser.firstName)
    }

    const handleChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => handleChange(e)} value={inputs.firstName} name="firstName"/>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => handleChange(e)} value={inputs.lastName}  name="lastName"/>
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => handleChange(e)} value={inputs.email}  name="email"/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => handleChange(e)} value={inputs.password} name="password"/>
                </div>
                <div>
                    <label> Confirm Password: </label>
                    <input type="password" onChange={(e) => handleChange(e)} value={inputs.confirmPassword} name= "confirmPassword"/>
                </div>
                <input type="submit" value="Create User" />
            </form>

            <div>
                <div className= {styles.formInfo}>
                    <label>First Name: </label>

                    <p> {inputs.firstName} </p>

                </div>
                <div>
                    <label>Last Name: </label>

                    <p>{inputs.lastName}</p>

                </div>
                <div>
                    <label>Email Address: </label>
                    <p>{inputs.email}</p>
                </div>
                <div>
                    <label>Password: </label>
                    <p> {inputs.password}</p>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <p> {inputs.confirmPassword}</p>
                </div>
                <input type="submit" value="Create User" />
            </div>
        </div>



    )
}

export default UserForm
