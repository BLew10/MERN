import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PlayerList from '../components/PlayerList';
import {
    Routes,
    Route,
    Link,
    useParams,
    useNavigate
} from "react-router-dom"


const Game = (props) => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [players, setPlayers] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() =>{
        axios.get('http://localhost:8000/api/players')
            .then(res=>{
                setPlayers(res.data)
                setLoaded(true)
            })
            .catch(err => console.error(err))
    }, [loaded])

    return (
        <div>
            <h1 className='font-bold text-2xl'>Game Status</h1>
            <div>
            <Link to={'/status/games/1'} className="hover:underline hover:text-cyan-500 text-blue-400"> Game 1 </Link>
            <Link to={'/status/games/2'} className="hover:underline hover:text-cyan-500 text-blue-400"> Game 2 </Link>
            <Link to={'/status/games/3'} className="hover:underline hover:text-cyan-500 text-blue-400"> Game 3 </Link>
            </div>
            <PlayerList players= {players} button={"games"} gameNumber = {id}/>
            <Link to={'/players'} className="hover:underline hover:text-cyan-500 text-blue-400"> Go to All Players</Link>
        </div>
    )
}


export default Game


