// import players from "../seed-data"
import { Link } from "react-router-dom"
import defaultImg from '../avatars/default.PNG'
import { useEffect, useState } from "react"



const HomePage = () => {

    const [players, setPlayers] = useState(null)

useEffect(() => {
    const fetchPlayers = async () => {
        const response = await fetch('/api/player-routes/')
        const json = await response.json()
        console.log(json)

        if (response.ok) {
            setPlayers(json)
        }
    }

    fetchPlayers()
}, [])


    return (
        <div className="body-content">
            <h2 className="padding-top">These Goons</h2>
            <div className="container">
                <div className="container-list body-content">

                {players && players.map(player => (
                    // <p key={player._id}>{player.gamerTag}</p>
                    <Link key={player.gamerTag} className="player-block" to={`/${player._id}`}>
                        <h3>{player.gamerTag}</h3>
                        <img src={defaultImg} className="avatar-img"></img>
                        <p>a.k.a. {player.name}</p>
                    </Link>

                ))}
            </div>
            </div>
            
        </div>

    )
}

export default HomePage