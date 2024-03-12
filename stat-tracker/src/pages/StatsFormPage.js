import { useState, useEffect } from "react"

const StatsFormPage = () => {

    const [players, setPlayers] = useState(null)
    const [gamer, setGamer] = useState('')
    const [eliminations, setEliminations] = useState('')
    const [assists, setAssists] = useState('')
    const [accuracy, setAccuracy] = useState('')
    const [hits, setHits] = useState('')
    const [shots, setShots] = useState('')
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

    useEffect(() => {
        const shotCalculation = Number(hits) / (Number(accuracy) / 100)
        setShots(shotCalculation.toFixed())
    }, [hits, accuracy])

    const addStats = async (event) => {
        event.preventDefault()

        const game = {eliminations, assists, hits, accuracy, shots}
        console.log(game)

        const response = await fetch('/api/player-routes/games', {
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
            window.alert(`This game has been added to ${gamer}'s data.`)
            console.log('new player added', json)
            setGamer('Select a Gamer')
            setEliminations('')
            setAssists('')
            setAccuracy('')
            setHits('')
        }

        for (let i = 0; i < players.length; i++) {
            const player = players[i]
            if (eliminations === '' || assists === '' || accuracy === '' || hits === '') {
                window.alert('All fields must be filled')
            }
            if (player.gamerTag === gamer) {
                player.games.push(
                    {
                        id: player.games.length + 1,
                        eliminations: Number(eliminations),
                        assists: Number(assists),
                        hits: Number(hits),
                        shots: Number(hits) / (Number(accuracy) / 100),
                        accuracy: Number(accuracy)
                    }
                )
                setGamer('Select a Gamer')
                setEliminations('')
                setAssists('')
                setAccuracy('')
                setHits('')
            }
        }
    }


    return (
        <>
            <h2 className="padding-top">New Stats Form</h2>

            {players && (
                <>
                    <form className="padding-top column container">
                        <div className="form-group">
                            <select placeholder='Select a Gamer' value={gamer} onChange={(e) => setGamer(e.target.value)}>
                                <option style={{ color: 'grey' }}>Select a Gamer</option>
                                {players && players.map(player => (
                                    <option key={player.gamerTag} className="player-block" to={`/${player.gamerTag}`}>
                                        {player.gamerTag}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
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
                        {(accuracy !== '' && hits !=='') ? <p>Calculated Shots Fired: {shots}</p> : <></>}

                        <button type='button' className="col-4 btn btn-light margin" onClick={addStats} disabled={
                            eliminations === '' || assists === '' || accuracy === '' || hits === '' || gamer === 'Select a Gamer' || gamer === ''}
                        >Submit Stats</button>
                    </form>
                </>
            )}
            
        </>

    )
}

export default StatsFormPage