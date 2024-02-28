import players from "../seed-data"
import { useState } from "react"

const StatsFormPage = () => {

    const [gamer, setGamer] = useState('')
    const [eliminations, setEliminations] = useState('')
    const [assists, setAssists] = useState('')
    const [accuracy, setAccuracy] = useState('')

    function addStats (event) {

        event.preventDefault()

        console.log(gamer)
        console.log(`elims: ${eliminations}`)
        console.log(`assists: ${assists}`)
        console.log(`accuracy: ${accuracy}%`)
    }


    return (
        <>
            <h2 className="padding-top">New Stats Form</h2>
            <form className="padding-top column container">
                <div className="form-group">
                    <select className="col-6" placeholder='Select a Gamer' value={gamer} onChange={(e)=> setGamer(e.target.value)}>
                        <option style={{color:'grey'}}>Select a Gamer</option>
                        {players.map(player => (
                            <option key={player.gamerTag} className="player-block" to={`/${player.gamerTag}`}>
                                {player.gamerTag}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>
                        <input
                            placeholder="Eliminations"
                            value={eliminations}
                            onChange={e => setEliminations(e.target.value)}>
                        </input>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                    <input
                            placeholder="Assists"
                            value={assists}
                            onChange={e => setAssists(e.target.value)}>
                        </input>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                    <input
                            placeholder="Accuracy"
                            value={accuracy}
                            onChange={e => setAccuracy(e.target.value)}>
                        </input>
                    </label>
                </div>

                <button className="col-4 btn margin" onClick={addStats}>Submit Stats</button>
            </form>
        </>

    )
}

export default StatsFormPage