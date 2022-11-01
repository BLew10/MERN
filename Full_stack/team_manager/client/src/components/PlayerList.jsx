import React from 'react'
import {
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom"
import DeleteButton from './DeleteButton'
import PlayingButtons from './PlayingButtons'

const PlayerList = (props) => {

    let usedButton = null
    const navigate = useNavigate()
    const { button, players, removeFromDom, gameNumber  } = props

    if (button === "delete") {
        usedButton = (playerId) => {
            return <DeleteButton successfulCallback={() => removeFromDom(playerId)} id={playerId} />
        }
    } else if (button === "games") {
        usedButton = (player) => {
            return <PlayingButtons  player={player} gameNumber={gameNumber}/>
        }
    }


    return (
        <div>
            <h1 className='text-2xl font-bold'>List</h1>
            {players.map(player => <p className='flex justify-between items-center w-1/4'><span>{player.fullName} {player.position}</span> 
            {button ==="delete" ? usedButton(player._id) : usedButton(player)}</p>)}
        </div>
    )
}

export default PlayerList

{/* <DeleteButton successfulCallback={()=>props.removeFromDom(player._id)} id={player._id}/> */ }