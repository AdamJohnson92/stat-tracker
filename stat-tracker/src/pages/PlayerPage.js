import players from "../seed-data"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const PlayerPage = () => {

    const params = useParams()
    const { playerId } = params
    const player = players.find(player => player.gamerTag === playerId);


 

    const numOfGames = player.games.length
    const averages = () => {

        let elimTotal = 0;
        let assistTotal = 0;
        let accuracyTotal = 0;

        for (let i = 0; i < player.games.length; i++) {
            const game = player.games[i]
            elimTotal += game.eliminations
            assistTotal += game.assists
            accuracyTotal += game.accuracy
        }

        const elimAverage = elimTotal / player.games.length
        const assistAverage = assistTotal / player.games.length
        const accuracyAverage = accuracyTotal / player.games.length

        return { elimAverage, assistAverage, accuracyAverage }
    }

    const eAverage = averages().elimAverage
    const assAverage = averages().assistAverage
    const accAverage = averages().accuracyAverage
   

    return (
        <>
            <h2 className="padding-top">{player.gamerTag}</h2>
            <img src={player.avatarSrc} className="avatar-img" />
            <p>Total Games: {player.games.length}</p>
            <div>
                <h3 className="padding-top">Most Recent Game</h3>
                <p> Eliminations: {player.games[player.games.length - 1].eliminations}</p>
                <p> Assists: {player.games[player.games.length - 1].assists}</p>
                <p> Accuracy: {player.games[player.games.length - 1].accuracy}%</p>
            </div>

            <div>
                <h3 className="padding-top">Lifetime Averages</h3>
                <p> Eliminations: {eAverage}</p>
                <p> Assists: {assAverage}</p>
                <p> Accuracy: {accAverage}%</p>
            </div>
        </>

    )
}

export default PlayerPage