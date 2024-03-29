import { useState, useEffect } from "react"

const StatsFormComponent = ({playerId, setPlayerId}) => {

    const [eliminations, setEliminations] = useState('')
    const [assists, setAssists] = useState('')
    const [accuracy, setAccuracy] = useState('')
    const [hits, setHits] = useState('')
    const [shots, setShots] = useState('')
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
        <div className="body-content">
            <div className="form-group">
                <label>
                    <input
                        type='number'
                        placeholder="Eliminations"
                        value={eliminations}
                        min={0}
                        max={99}
                        className="form-input"
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
                        min={0}
                        max={99}
                        className="form-input"
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
                        min={0}
                        max={100}
                        className="form-input"
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
                        min={0}
                        className="form-input"
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
        </div>
    )
}

export default StatsFormComponent