import players from "../seed-data"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import PageNotFound from "./PageNotFound"
import defaultImg from '../avatars/default.PNG'

const PlayerPage = () => {

    const blankPlayer = {
         gamerTag:'',
        name: '',
        _id: '',
        games: []
    }

    const [thisPlayer, setThisPlayer] = useState(blankPlayer)

 const params = useParams()
    const { playerId } = params
    const player = playerId;

    useEffect(() => {
        const fetchPlayer = async() => {
            const response = await fetch(`/api/player-routes/${playerId}`)
            const json = await response.json()

            if (response.ok) {
                setThisPlayer(json)
            }

        }

        fetchPlayer()
    },[])

   

    // const averages = () => {

    //     let elimTotal = 0;
    //     let assistTotal = 0;
    //     let hitsTotal = 0
    //     let shotTotal = 0
    //     let accuracyTotal = 0;

    //     for (let i = 0; i < player.games.length; i++) {
    //         const game = player.games[i]
    //         elimTotal += game.eliminations
    //         assistTotal += game.assists
    //         hitsTotal += game.hits
    //         shotTotal += game.shots
    //         accuracyTotal += game.accuracy
    //     }

    //     const elimAverage = elimTotal / player.games.length
    //     const assistAverage = assistTotal / player.games.length
    //     const accuracyAverage = accuracyTotal / player.games.length

    //     return { elimAverage, assistAverage, hitsTotal, shotTotal, accuracyAverage }
    // }

    // const eAverage = averages().elimAverage
    // const assAverage = averages().assistAverage
    // const accAverage = averages().accuracyAverage
    // const hTotal = averages().hitsTotal
    // const shTotal = averages().shotTotal

  const deletePlayer = async () => {
    console.log(thisPlayer)
    const response = await fetch(`/api/player-routes/${thisPlayer._id}`, {
        method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
        setThisPlayer(blankPlayer)
    }
  }


    return (
        <div className="body-content container">
            {!player ? <PageNotFound /> :
                <>
                    <h2 className="padding-top">{thisPlayer.gamerTag}</h2>
                    <img src={defaultImg} className="avatar-img" />
                    <div>
                        {/* <p>Total Games: {player.games.length}</p>
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
                                                <h3 className="padding-top">Lifetime Stats</h3>
                                                <p className="padding-top"> Average Eliminations Per Game: {eAverage.toFixed(2)}</p>
                                                <p> Average Assists Per Game: {assAverage.toFixed(2)}</p>
                                                <p> Total Lifetime Shots: {shTotal.toFixed()}</p>
                                                <p> Total Lifetime Hits: {hTotal}</p>
                                                <p> Lifetime Accuracy: {((hTotal / shTotal) * 100).toFixed()}%</p>
                                            </div>

                                            <div className="container">
                                                <Link to={`/${player.gamerTag}/all-games`}>
                                                    <button type='button' className="btn btn-light">View All of {player.gamerTag}'s Games</button>
                                                </Link>
                                            </div>
                                        </>
                                }


                            </div>
                           


                        </div>  */}
                        <Link to='/deleted-player'>
                                <button type='button' className="btn btn-danger margin" onClick={deletePlayer}>Delete </button>
                            </Link>
                    </div>
                </>}



        </div>

    )
}

export default PlayerPage