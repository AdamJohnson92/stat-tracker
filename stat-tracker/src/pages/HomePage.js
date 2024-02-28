import players from "../seed-data"
import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div className="body-content">
            <h2>These Goons</h2>
            <div className="player-list body-content">

                {players.map(player => (
                    <Link key={player.gamerTag} className="player-block" to={`/${player.gamerTag}`}>
                        <h3>{player.gamerTag}</h3>
                        <img src={player.avatarSrc} className="avatar-img"></img>
                        <p>a.k.a. {player.name}</p>
                    </Link>

                ))}
            </div>
        </div>

    )
}

export default HomePage