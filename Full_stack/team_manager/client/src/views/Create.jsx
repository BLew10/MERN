import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PlayerForm from '../components/PlayerForm';
import {
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom"


const Create = (props) => {
    const navigate = useNavigate()
    const [loaded, setLoaded] = useState(false)
    const [players, setPlayers] = useState([])
    const [errors, setErrors] = useState([])
    // const games = {
    //     1: {
    //         playing: false,
    //         notPlaying: false,
    //         undecided: true
    //     },
    //     2:{
    //         playing: false,
    //         notPlaying: false,
    //         undecided: true
    //     },
    //     3: {
    //         playing: false,
    //         notPlaying: false,
    //         undecided: true
    //     }
    // }

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => {
                setPlayers(res.data)
                setLoaded(true)
            })
    }, [loaded])

    const newPlayer = (player) => {
        axios.post('http://localhost:8000/api/players/new', {
            ...player
        })
            .then(res => {
                console.log(res)
                navigate('/players')
            })
            .catch(err => {
                const errorResponse = err.response.data.errors
                const errorArr = []

                for (const key in errorResponse) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            })
        // .catch(err=>console.log(err))
        setLoaded(false)
    }

    return (
        <div>
            <h1>Add a New Player</h1>
            <PlayerForm onSubmitProp={newPlayer} initialFirstName="" initialLastName="" errors={errors} />
            <Link to={'/players'}> Home </Link>

        </div>
    )
}


export default Create


