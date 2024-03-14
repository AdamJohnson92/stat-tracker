import { useState, useEffect } from "react"
import StatsFormComponent from "../components/StatsForm"

const StatsFormPage = () => {

    const [players, setPlayers] = useState(null)
    const [playerId, setPlayerId] = useState('')
    // const [eliminations, setEliminations] = useState('')
    // const [assists, setAssists] = useState('')
    // const [accuracy, setAccuracy] = useState('')
    // const [hits, setHits] = useState('')
    // const [shots, setShots] = useState('')
    const [error, setError] = useState(null)

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
        <>
            <h2 className="padding-top">New Stats Form</h2>

            {players && (
                <>
                    <form className="padding-top column container">
                        <div className="form-group">
                            <select placeholder='Select a Gamer' value={playerId} onChange={(e) => setPlayerId(e.target.value)}>
                                <option style={{ color: 'grey' }}>Select a Gamer</option>
                                {players && players.map(player => (
                                    <option key={player.gamerTag} className="player-block" value={player._id} to={`/${player._id}`} >
                                        {player.gamerTag} 
                                    </option>
                                ))}
                            </select>
                        </div>
                        <StatsFormComponent 
                        playerId={playerId} setPlayerId={setPlayerId}
                        />
                    </form>
                    {error && <div>{error}</div>}
                </>
            )}
        </>
    )
}

export default StatsFormPage