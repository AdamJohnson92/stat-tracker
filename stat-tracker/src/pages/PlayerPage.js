import players from "../seed-data"
import { useParams } from "react-router-dom"
import { useState } from "react"

const PlayerPage = () => {

    const params = useParams()
    const { playerId } = params
    const player = players.find(player => player.gamerTag === playerId);

    return (
    <>
        <h2>{player.gamerTag}</h2>
        <h4></h4>
        <div>
            <p> Eliminations: {player.games[0].eliminations}</p>
            <p> Assists: {player.games[0].assists}</p>
            <p> Accuracy: {player.games[0].accuracy}%</p>
            
        </div>
    </>

    )
}

export default PlayerPage