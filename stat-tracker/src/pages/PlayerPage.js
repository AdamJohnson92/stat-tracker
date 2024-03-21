import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import StatsFormComponent from "../components/StatsForm"
import PageNotFound from "./PageNotFound"
import defaultImg from '../avatars/defaultImg.PNG'

const PlayerPage = () => {

    const [thisPlayer, setThisPlayer] = useState(null)
    const [eTotal, setETotal] = useState(0)
    const [eAverage, setEAverage] = useState(0)
    const [assTotal, setAssTotal] = useState(0)
    const [assAverage, setAssAverage] = useState(0)
    const [shotTotal, setShotTotal] = useState(0)
    const [hitTotal, setHitTotal] = useState(0)
    const [recentGames, setRecentGames] = useState(null)

    const params = useParams()
    const { playerId } = params

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



    let elimTotal = 0;
    let assistTotal = 0;
    let hitsTotal = 0
    let shotsTotal = 0
    let accuracyTotal = 0;

    const averages = () => {
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
            addRecentGame()
        } else { console.log('not yet!') }

    }, [thisPlayer])

    //creating an arr of the most recent 10 games, unless there are fewer than 10 games. 

    let recentGamesArr;
    let count = 1;

    function addRecentGame() {
        if (thisPlayer.games.length < 10) {
            recentGamesArr = thisPlayer.games
        } else {
            recentGamesArr = thisPlayer.games.slice(thisPlayer.games.length-10, thisPlayer.games.length).reverse()
        }
        setRecentGames(recentGamesArr)
    }

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
                    <img src={require(`../avatars/${thisPlayer.avatar}.PNG`)} className="avatar-img" />
                    <p>Number of Games: {thisPlayer.games.length}</p>
                    <div>
                        <div className="body-content container">
                            {(thisPlayer.games.length === 0) ?
                                <h3>{thisPlayer.gamerTag} doesn't have any games!</h3> : (<>
                                    <h3 className="padding-top">Most Recent Game</h3>
                                    <p> Eliminations: <b>{thisPlayer.games[thisPlayer.games.length - 1].eliminations}</b></p>
                                    <p> Assists: <b> {thisPlayer.games[thisPlayer.games.length - 1].assists}</b> </p>
                                    <p> Shots Fired: <b> {(thisPlayer.games[thisPlayer.games.length - 1].hits / (thisPlayer.games[thisPlayer.games.length - 1].accuracy / 100)).toFixed()}</b> </p>
                                    <p> Shots Hit: <b> {thisPlayer.games[thisPlayer.games.length - 1].hits}</b> </p>
                                    <p> Accuracy: <b> {thisPlayer.games[thisPlayer.games.length - 1].accuracy}%</b> </p>
                                    <div className="padding-bottom">
                                        <h3 className="padding-top">Lifetime Stats</h3>
                                        <p>Lifetime Eliminations: <b>{eTotal}</b></p>
                                        <p>Average Eliminations Per Game: <b>{eAverage.toFixed(1)}</b></p>
                                        <p>Lifetime Assists: <b>{assTotal}</b></p>
                                        <p>Average Assists Per Game: <b>{assAverage.toFixed(1)}</b></p>
                                        <p>Total Shots Fired: <b>{shotTotal}</b></p>
                                        <p>Total Shots Hit: <b>{hitTotal}</b></p>
                                        <p>Total Accuracy: <b>{(hitTotal / shotTotal * 100).toFixed(2)}%</b></p>
                                    </div>


                                </>)}
                            {/* <h4 className="padding-top">Add a New Game for {thisPlayer.gamerTag}</h4>
                                <form>
                                    <StatsFormComponent playerId={thisPlayer} setPlayerId={setThisPlayer}/>
                                </form> */}
                            {recentGames && 
                            <div>
                                {recentGames.length === 0 ? <></> : 
                                <div>
                                    <h3 className="margin">Recent Games</h3>
                                    <table className="table padding-top margin table-border-radius" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Eliminations</th>
                                                <th>Assists</th>
                                                <th>Shots Fired</th>
                                                <th>Shots Hit</th>
                                                <th>Accuracy</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {recentGames.map(recentGame => (
                                                <tr>
                                                    {/* This td cell reformats the 'createdAt' timestamp into a more digestable date format */}
                                                    <td>{recentGame.createdAt[5]}{recentGame.createdAt[6]}/{recentGame.createdAt[8]}{recentGame.createdAt[9]}/{recentGame.createdAt[0]}{recentGame.createdAt[1]}{recentGame.createdAt[2]}{recentGame.createdAt[3]}</td>
                                                    <td>{recentGame.eliminations}</td>
                                                    <td>{recentGame.assists}</td>
                                                    <td>{recentGame.shots}</td>
                                                    <td>{recentGame.hits}</td>
                                                    <td>{recentGame.accuracy}</td>
                                                </tr>

                                            ))}
                                        </tbody>
                                    </table>
                                    <div className="container padding-top">
                                        <Link to={`/${thisPlayer._id}/all-games`}>
                                            <button type='button' className="btn btn-light">View All of {thisPlayer.gamerTag}'s Games</button>
                                        </Link>
                                    </div>
                                </div>}
                            </div>

                            }
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