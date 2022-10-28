import React, { useState, useEffect } from 'react'
import { useParams } from "react-router";
import axios from 'axios'
import {
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom"

const People = (props) => {
    const navigate = useNavigate()
    // const [inputs, setInputs] = useState({ ...props.inputs })
    const [person, setPerson] = useState({})
    const { id } = useParams()
    console.log("im here")

    const getInfo = () => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res => {
                console.log(res.data)
                setPerson(res.data)
            })
            .catch(err => { 
                console.log("This is your error: " + err)
                navigate('/error')
            })
    }
    useEffect(getInfo, [id])

    return (
        <div>
            <h1>{person.name}</h1>
            <p>{person.mass}</p>
            <p>{person.hair_color}</p>
            <p>{person.skin_color}</p>
            <p>{person.height}</p>
        </div>
    )
}

export default People