import React, { useState } from 'react'
import axios from 'axios'

const PlayingButtons = (props) => {
    const { player, playerGames, gameNumber } = props
    const [updatedPlayer, setUpdatedPlayer] = useState({
        fullName: player.fullName,
        position: player.position,
        games: player.games
    })
    // updatedPlayer.games[gameNumber] = Object.keys(updatedPlayer.games[gameNumber]).reduce((accumulator, key) => {
    //     return { ...accumulator, [key]: false };
    // }, {});
    // updatedPlayer.games[gameNumber].undecided = true
    // console.log(updatedPlayer.games[gameNumber])
    const handleClick = (e) => {
        updatedPlayer.games[gameNumber] = Object.keys(updatedPlayer.games[gameNumber]).reduce((accumulator, key) => {
            return { ...accumulator, [key]: false };
        }, {});
        updatedPlayer.games[gameNumber][e.target.name] = true
        setUpdatedPlayer({ ...updatedPlayer})
        axios.put(`http://localhost:8000/api/players/${player._id}`, {
            ...updatedPlayer
        })
            .then(res => {console.log(res)})
            .catch(err => {console.log(err)})

    }


    return (
        <span className='flex justify-around items-center'>
            <button className={`p-1 border-2 border-slate-300 rounded ${updatedPlayer.games[gameNumber].playing ? "bg-green-300" : ""}`} onClick={(e) => handleClick(e)} name="playing">Playing</button>
            <button className={`p-1 border-2 border-slate-300 rounded ${updatedPlayer.games[gameNumber].notPlaying ? "bg-red-300" : ""}`} onClick={(e) => handleClick(e)} name="notPlaying">Not Playing</button>
            <button className={`p-1 border-2 border-slate-300 rounded ${updatedPlayer.games[gameNumber].undecided ? "bg-yellow-300" : ""}`} onClick={(e) => handleClick(e)} name="undecided">Undecided</button>
        </span>
    )
}

export default PlayingButtons

