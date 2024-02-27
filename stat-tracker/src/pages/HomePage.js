import players from "../seed-data"
import { Link } from "react-router-dom"

const HomePage = () => {
    return (<>
        <h2>These Goons</h2>
        <div className="player-list">

            {players.map(player => (
                <Link className="player-block" to={`/${player.gamerTag}`}>
                    <h3>{player.gamerTag}</h3>
                    <p>a.k.a. {player.name}</p>
                </Link>
               
            ))}
        </div>
    </>

    )
}

export default HomePage