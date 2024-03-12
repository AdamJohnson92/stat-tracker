import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const PlayerAllGamesPage = () => {


    const params = useParams()
    const { playerId } = params
    const [thisPlayer, setThisPlayer] = useState(null)

    useEffect(() => {
        const fetchPlayer = async () => {
            const response = await fetch(`/api/player-routes/${playerId}`)
            const json = await response.json()

            if (response.ok) {
                setThisPlayer(json)
            }

        }

        fetchPlayer()
    }, [])


    return (
        <div className="body-content container">
            {thisPlayer && (
                <>
                    <Link to={`/${thisPlayer._id}`}>
                        <h2 className="padding-top">{thisPlayer.gamerTag}</h2>
                        <img src={require(`../avatars/${thisPlayer.avatar}.PNG`)} className="avatar-img" />

                    </Link>
                    <p>Total Games: {thisPlayer.games.length}</p>

                    <div className="body-content">
                        <h3 className="padding-top">All Games</h3>
                        <div className="container-list">
                            {thisPlayer.games.map(game => (
                                <div className="player-block">
                                    <h4>Game: {game.createdAt}</h4>
                                    <p> Eliminations: {game.eliminations}</p>
                                    <p> Assists: {game.assists}</p>
                                    <p> Shots: {game.shots.toFixed()}</p>
                                    <p> Hits: {game.hits} </p>
                                    <p> Accuracy: {game.accuracy}%</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </>
            )}

        </div>

    )
}

export default PlayerAllGamesPage