import React, { useState, useEffect } from 'react'
import { useParams } from "react-router";
import axios from 'axios'
import {
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom"

const Planets = (props) => {
    const navigate = useNavigate()
    // const [inputs, setInputs] = useState({ ...props.inputs })
    const [planet, setPlanet] = useState({})
    const { id } = useParams()
    console.log("im here")

    const getInfo = () => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(res => {
                console.log(res.data)
                setPlanet(res.data)
                return res.data
            })
            .catch(err => {
                console.log("This is your error: " + err)
                navigate('/error')
            })

    }
    useEffect(getInfo, [id])

    return (
        <div>
            <h1>{planet.name}</h1>
            <p>{planet.climate}</p>
            <p>{planet.terrain}</p>
            <p>{planet.surface_water}</p>
            <p>{planet.population}</p>

        </div>
    )
}

export default Planets