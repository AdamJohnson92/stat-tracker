import players from "../seed-data"
import { useParams } from "react-router-dom"
import { useState } from "react"

const PlayerPage = () => {

    const params = useParams()
    const { playerId } = params
    const player = players.find(player => player.gamerTag === playerId);

    return (
    <>
        <h2 className="padding-top">{player.gamerTag}</h2>
        <img src={player.avatarSrc} className="avatar-img"/>
        <div>
            <h3 className="padding-top">Most Recent Game</h3>
            <p> Eliminations: {player.games[player.games.length - 1].eliminations}</p>
            <p> Assists: {player.games[player.games.length - 1].assists}</p>
            <p> Accuracy: {player.games[player.games.length - 1].accuracy}%</p>
        </div>

        <div>
            <h3 className="padding-top">Lifetime Averages</h3>
            <p> Eliminations: {player.games[player.games.length - 1].eliminations}</p>
            <p> Assists: {player.games[player.games.length - 1].assists}</p>
            <p> Accuracy: {player.games[player.games.length - 1].accuracy}%</p>
        </div>
    </>

    )
}

export default PlayerPage