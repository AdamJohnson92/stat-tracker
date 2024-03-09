import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import PageNotFound from "./PageNotFound"
import defaultImg from '../avatars/default.PNG'

const PlayerPage = () => {

    const [thisPlayer, setThisPlayer] = useState(null)
    const [eTotal, setETotal] = useState(0)
    const [eAverage, setEAverage] = useState(0)
    const [assTotal, setAssTotal] = useState(0)
    const [assAverage, setAssAverage] = useState(0)
    const [shotTotal, setShotTotal] = useState(0)
    const [hitTotal, setHitTotal] = useState(0)

    const params = useParams()
    const { playerId } = params
    // const player = playerId;

    useEffect(() => {
        const fetchPlayer = async () => {
            const response = await fetch(`/api/player-routes/${playerId}`)
            const json = await response.json()

            if (response.ok) {
                console.log(json)
                setThisPlayer(json)
            }

        }

        fetchPlayer()
    }, [])



    let elimTotal = 0;
    let assistTotal = 0;
    let hitsTotal = 0
    let shotsTotal = 0
    let accuracyTotal = 0;

    const averages = () => {
        console.log(thisPlayer.games)
        for (let i = 0; i < thisPlayer.games.length; i++) {
            const game = thisPlayer.games[i]
            elimTotal += game.eliminations
            assistTotal += game.assists
            shotsTotal += game.shots
            hitsTotal += game.hits
        }
        setETotal(elimTotal)
        setEAverage(elimTotal / thisPlayer.games.length)
        setAssTotal(assistTotal)
        setAssAverage(assistTotal / thisPlayer.games.length)
        setShotTotal(shotsTotal)
        setHitTotal(hitsTotal)

    }

    useEffect(() => {
        if (thisPlayer) {
            averages()
        } else { console.log('not yet!') }

    }, [thisPlayer])

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
            setThisPlayer(null)
        }
    }


    return (
        <div className="body-content container">
            {thisPlayer && (
                <>
                    <h2 className="padding-top">{thisPlayer.gamerTag}</h2>
                    <img src={defaultImg} className="avatar-img" />
                    <p>Number of Games: {thisPlayer.games.length}</p>
                    <div>
                        <div className="body-content container">
                            {(thisPlayer.games.length === 0) ?
                                <h3>{thisPlayer.gamerTag} doesn't have any games!</h3> : (
                                    <>
                                        <h3 className="padding-top">Most Recent Game</h3>
                                        <p> Eliminations: {thisPlayer.games[0].eliminations}</p>
                                        <p> Assists: {thisPlayer.games[0].assists}</p>
                                        <p> Shots Fired: {(thisPlayer.games[0].hits / (thisPlayer.games[0].accuracy / 100)).toFixed()}</p>
                                        <p> Shots Hit: {thisPlayer.games[0].hits}</p>
                                        <p> Accuracy: {thisPlayer.games[0].accuracy}%</p>
                                        <div className="padding-bottom">
                                            <h3 className="padding-top">Lifetime Stats</h3>
                                            <p>Lifetime Eliminations: {eTotal}</p>
                                            <p>Average Eliminations Per Game: {eAverage.toFixed(1)}</p>
                                            <p>Lifetime Assists: {assTotal}</p>
                                            <p>Average Assists Per Game: {assAverage.toFixed(1)}</p>
                                            <p>Total Shots Fired: {shotTotal}</p>
                                            <p>Total Shots Hit: {hitTotal}</p>
                                            <p>Total Accuracy: {hitTotal/shotTotal*100}%</p>
                                            {/* <p className="padding-top"> Average Eliminations Per Game: {eAverage.toFixed(2)}</p>
                                                 <p> Average Assists Per Game: {assAverage.toFixed(2)}</p>
                                                 <p> Total Lifetime Shots: {shTotal.toFixed()}</p>
                                                 <p> Total Lifetime Hits: {hTotal}</p>
                                                 <p> Lifetime Accuracy: {((hTotal / shTotal) * 100).toFixed()}%</p> */}
                                        </div>

                                        {/* <div className="container">
                                                        <Link to={`/${thisPlayer.gamerTag}/all-games`}>
                                                        <button type='button' className="btn btn-light">View All of {thisPlayer.gamerTag}'s Games</button>
                                                        </Link>
                                                    </div> */}
                                    </>
                                )}
                        </div>
                        <Link to='/deleted-player'>
                            <button type='button' className="btn btn-danger margin" onClick={deletePlayer}>Delete </button>
                        </Link>
                    </div>
                </>
            )}
        </div>
    )
}

export default PlayerPage