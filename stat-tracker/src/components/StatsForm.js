import { useState, useEffect } from "react"

const StatsFormComponent = ({eliminations, setEliminations, assists, setAssists, accuracy, setAccuracy, hits, setHits, shots, setShots, playerId, setPlayerId}) => {

    const [players, setPlayers] = useState(null)
    const [gamerTag, setGamerTag] = useState('')
    const [error, setError] = useState(null)
    const [confirmMssg, setConfirmMssg] = useState('')


    useEffect(() => {
        const shotCalculation = Number(hits) / (Number(accuracy) / 100)
        setShots(shotCalculation.toFixed())
    }, [hits, accuracy])

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
            {(accuracy !== '' && hits !== '') ? <p>Calculated Shots Fired: {shots}</p> : <></>}

            <h5>{confirmMssg}</h5>

            <button type='button' className="col-4 btn btn-light margin" onClick={addStats} disabled={
                eliminations === '' || assists === '' || accuracy === '' || hits === '' || playerId === 'Select a Gamer' || playerId === ''}
            >Submit Stats</button>
            {error && <div>{error}</div>}
        </>
    )
}

export default StatsFormComponent