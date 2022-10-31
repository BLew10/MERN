import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([])

    const getPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then(res => {
            setPokemon(res.data.results)
        })
    }

    // useEffect(()=> {
    //     if(pokemon.length === 0){
    //         console.log("yo")
    //         getPokemon()
    //     }
    // }  ,[])


    return (
        <div>
            <button onClick={getPokemon}>Display Pokemon</button>
            {pokemon ? pokemon.map((pokemon) => {
                return (<li>{pokemon.name}</li>)
            }) : null}
        </div>
    )
}


// const Pokemon = () => {
//     const [pokemon, setPokemon] = useState(0)
//     const getPokemon = () => {
//         fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
//         .then(res => {
//             return res.json()
//         })
//         .then(res => {
//             setPokemon({
//                 details: res.results
//             })
//         })
//     }

//     useEffect(getPokemon, [])

//     return (
//         <div>
//             <button onClick ={getPokemon}>Display Pokemon</button>
//             {pokemon.details ? pokemon.details.map((pokemon) => {
//                 return (<li>{pokemon.name}</li>)
//             }) : null}
//         </div>
//     )
// }


export default Pokemon