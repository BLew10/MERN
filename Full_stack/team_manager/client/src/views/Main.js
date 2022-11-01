import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PlayerForm from '../components/PlayerForm';
import PlayerList from '../components/PlayerList'
import DeleteButton from '../components/DeleteButton'
import {
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom"


const Main = (props) => {
    const [loaded, setLoaded] = useState(false)
    const [players, setPlayers] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:8000/api/players')
            .then(res=>{
                setPlayers(res.data)
                setLoaded(true)
            })
            .catch(err => console.error(err))
    }, [loaded])

    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id !== playerId));
    }


    return (
        <div>
                { loaded && <PlayerList players = {players} button={"delete"} removeFromDom ={removeFromDom }/> } 
                <Link to={'/players/new'} className="hover:underline hover:text-cyan-500 text-blue-400"> Add Player </Link>
                <Link to={'/status/games/1'} className="hover:underline hover:text-green-500 text-green-400">Games</Link>
        </div>
    )
}


export default Main


