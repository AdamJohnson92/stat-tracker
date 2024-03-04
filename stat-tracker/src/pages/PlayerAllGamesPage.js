import players from "../seed-data"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const PlayerAllGamesPage = () => {

    const params = useParams()
    const { playerId } = params
    const player = players.find(player => player.gamerTag === playerId);



    return (
        <div className="body-content container">
            <Link to={`/${player.gamerTag}`}>
                <h2 className="padding-top">{player.gamerTag}</h2>
                <img src={player.avatarSrc} className="avatar-img" />
                <p>Total Games: {player.games.length}</p>
            </Link>

            <div className="body-content">
                <h3 className="padding-top">All Games</h3>
                <div className="container-list">
                    {player.games.map(game => (
                        <div className="player-block">
                            <h4>Game: {game.id}</h4>
                            <p> Eliminations: {game.eliminations}</p>
                            <p> Assists: {game.assists}</p>
                            <p> Shots: {game.shots.toFixed()}</p>
                            <p> Hits: {game.hits} </p>
                            <p> Accuracy: {game.accuracy}%</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>

    )
}

export default PlayerAllGamesPage