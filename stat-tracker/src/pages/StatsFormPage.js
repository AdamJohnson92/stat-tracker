import { useState, useEffect } from "react"
import StatsFormComponent from "../components/StatsForm"

const StatsFormPage = () => {

    const [players, setPlayers] = useState(null)
    const [playerId, setPlayerId] = useState('')
    const [gamerTag, setGamerTag] = useState('')
    const [eliminations, setEliminations] = useState('')
    const [assists, setAssists] = useState('')
    const [accuracy, setAccuracy] = useState('')
    const [hits, setHits] = useState('')
    const [shots, setShots] = useState('')
    const [error, setError] = useState(null)
    const [confirmMssg, setConfirmMssg] = useState('')

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

    useEffect(() => {
        const shotCalculation = Number(hits) / (Number(accuracy) / 100)
        setShots(shotCalculation.toFixed())
    }, [hits, accuracy])


    useEffect(() => {
        console.log(playerId)
    }, [playerId])

    const addStats = async (event) => {
        event.preventDefault()

        const game = { playerId, eliminations, assists, hits, accuracy, shots }
        console.log(game)

        const response = await fetch(`/api/player-routes/${playerId}/games`, {
            method: 'POST',
            body: JSON.stringify(game),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            console.log(json)
            setError(null)
            setConfirmMssg(`The game statistics have been added to the player!`)
            console.log('New game added', json)
            setPlayerId('Select a Gamer')
            setEliminations('')
            setAssists('')
            setAccuracy('')
            setHits('')
        }

    }


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
                        eliminations={eliminations} setEliminations={setEliminations} assists={assists} setAssists={setAssists}accuracy={accuracy} setAccuracy={setAccuracy} shots={shots} setShots={setShots} hits={hits} setHits={setHits} playerId={playerId}
                        />
                        {/* <div className="form-group">
                            <label>
                                <input
                                    type='number'
                                    placeholder="Eliminations"
                                    value={eliminations}
                                    onChange={e => setEliminations(e.target.value)}>
                                </input>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                <input
                                    type='number'
                                    placeholder="Assists"
                                    value={assists}
                                    onChange={e => setAssists(e.target.value)}>
                                </input>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                <input
                                    type='number'
                                    placeholder="Accuracy"
                                    value={accuracy}
                                    onChange={e => setAccuracy(e.target.value)}>
                                </input>
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                <input
                                    type='number'
                                    placeholder="Hits"
                                    value={hits}
                                    onChange={e => setHits(e.target.value)}>
                                </input>
                            </label>
                        </div>
                        {(accuracy !== '' && hits !== '') ? <p>Calculated Shots Fired: {shots}</p> : <></>}

                        <h5>{confirmMssg}</h5>

                        <button type='button' className="col-4 btn btn-light margin" onClick={addStats} disabled={
                            eliminations === '' || assists === '' || accuracy === '' || hits === '' || playerId === 'Select a Gamer' || playerId === ''}
                        >Submit Stats</button> */}
                    </form>
                    {error && <div>{error}</div>}
                </>
            )}
        </>
    )
}

export default StatsFormPage