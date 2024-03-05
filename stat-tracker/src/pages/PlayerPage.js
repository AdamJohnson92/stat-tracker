import players from "../seed-data"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const PlayerPage = () => {

    const params = useParams()
    const { playerId } = params
    const player = players.find(player => player.gamerTag === playerId);




    const numOfGames = player.games.length
    const averages = () => {

        let elimTotal = 0;
        let assistTotal = 0;
        let hitsTotal = 0
        let shotTotal = 0
        let accuracyTotal = 0;

        for (let i = 0; i < player.games.length; i++) {
            const game = player.games[i]
            elimTotal += game.eliminations
            assistTotal += game.assists
            hitsTotal += game.hits
            shotTotal += game.shots
            accuracyTotal += game.accuracy
        }

        const elimAverage = elimTotal / player.games.length
        const assistAverage = assistTotal / player.games.length
        const accuracyAverage = accuracyTotal / player.games.length

        return { elimAverage, assistAverage, hitsTotal, shotTotal, accuracyAverage }
    }

    const eAverage = averages().elimAverage
    const assAverage = averages().assistAverage
    const accAverage = averages().accuracyAverage
    const hTotal = averages().hitsTotal
    const shTotal = averages().shotTotal


    return (
        <div className="body-content container">
            <h2 className="padding-top">{player.gamerTag}</h2>
            <img src={player.avatarSrc} className="avatar-img" />
            <div>
                <p>Total Games: {player.games.length}</p>
                <div className="body-content container">
                    <div>
                        {
                            !player.games.length ?
                                <>
                                    <h3>This player doesn't have any games in the database.</h3>
                                </> :
                                <>
                                    <h3 className="padding-top">Most Recent Game</h3>
                                    <p> Eliminations: {player.games[player.games.length - 1].eliminations}</p>
                                    <p> Assists: {player.games[player.games.length - 1].assists}</p>
                                    <p> Shots Fired: {(player.games[player.games.length - 1].hits / (player.games[player.games.length - 1].accuracy / 100)).toFixed()}</p>
                                    <p> Shots Hit: {player.games[player.games.length - 1].hits}</p>
                                    <p> Accuracy: {player.games[player.games.length - 1].accuracy}%</p>
                                    <div className="padding-bottom">
                                        <h3 className="padding-top">Lifetime Averages</h3>
                                        <p className="padding-top"> Eliminations Per Game: {eAverage.toFixed(2)}</p>
                                        <p> Assists Per Game: {assAverage.toFixed(2)}</p>
                                        <p> Total Lifetime Shots: {shTotal.toFixed()}</p>
                                        <p> Total Lifetime Hits: {hTotal}</p>
                                        <p> Lifetime Accuracy: {((hTotal / shTotal)*100).toFixed()}%</p>
                                    </div>

                                    <div className="container">
                                        <Link to={`/${player.gamerTag}/all-games`}>
                                            <button className="btn">View All of {player.gamerTag}'s Games</button>
                                        </Link>
                                    </div>
                                </>
                        }


                    </div>



                </div>
            </div>


        </div>

    )
}

export default PlayerPage