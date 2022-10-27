import React, { useState } from 'react';
import styles from './UserForm.module.css';

const UserForm = props => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const createUser = (e) => {
        const newUser = { firstName, lastName, email, password, confirmPassword }
        console.log("Welcome", newUser.firstName)
    }

    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>

                    <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />

                </div>
                <div>
                    <label>Last Name: </label>

                    <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />

                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <div>
                    <label> Confirm Password: </label>
                    <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                </div>
                <input type="submit" value="Create User" />
            </form>

            <div>
                <div className= {styles.formInfo}>
                    <label>First Name: </label>

                    <p> {firstName} </p>

                </div>
                <div>
                    <label>Last Name: </label>

                    <p>{lastName}</p>

                </div>
                <div>
                    <label>Email Address: </label>
                    <p>{email}</p>
                </div>
                <div>
                    <label>Password: </label>
                    <p> {password}</p>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <p> {confirmPassword}</p>
                </div>
                <input type="submit" value="Create User" />
            </div>
        </div>



    )
}

export default UserForm
